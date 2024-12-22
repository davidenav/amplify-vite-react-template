import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, Button, TextField } from '@mui/material';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import type { Schema } from "../amplify/data/resource";
import { SelectionSet } from "aws-amplify/api";
import { generateClient } from "aws-amplify/data";
import { ContractUpdateForm, ContractRequestsCreateForm } from '../ui-components';
import { remove, getUrl, GetUrlWithPathOutput } from 'aws-amplify/storage';

export const contractSelectionSet = ['id', 'propertyId', 'startDate', 'endDate', 'monthlyRent', 'paymentDayOfMonth', 'rentCurrency', 
    'contractDescription', 'tenantId', 'contractPdf', 'incidents.*', 'contractRequests.*'] as const;
export type contractType = SelectionSet<Schema['Contract']['type'], typeof contractSelectionSet>;

const LandlordManageContract: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const contractId = location.state?.id;
    const [contract, setContract] = useState<contractType | null>(null); 

    const client = generateClient<Schema>();
    const [tenantEmail, setTenantEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [linkToStorageFile, setLinkToStorageFile] = useState<GetUrlWithPathOutput>();

    const handleEmailChange = (event => {
        const email = event.target.value;
        setTenantEmail(email);
        setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    });

    useEffect(() => {
        const fetchContract = async () => {
        try {
            const contractData = await client.models.Contract.get({ 
            id: contractId
            },
            { selectionSet: contractSelectionSet });
            if (contractData.data) {
                setContract(contractData.data);
                const linkToStorageFile = await getUrl({ path: contractData.data?.contractPdf ?? '' });
                setLinkToStorageFile(linkToStorageFile);
            }
        } catch (error) {
            console.error('Error fetching contract:', error);
        }
        };

        fetchContract();
    }, [contractId]);

    async function handleConnectTenant(): Promise<void> {
        try {
            // Create a new contract request
            await client.models.ContractRequests.create({
                type: "New",
                contractId: contract?.id ?? '',
                tenantId: tenantEmail,
                status: "Pending"
            });
        }
        catch (error) {
            console.error('Error connecting tenant:', error);
        }
    }

    return (
<Routes>
<Route path="/" element={
        <Container>
            <Typography variant="h4" gutterBottom>
                Contract Details
            </Typography>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Grid container spacing={3}>
                   <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Start Date:</Typography>
                        <Typography>{contract?.startDate}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">End Date:</Typography>
                        <Typography>{contract?.endDate}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Rent Amount:</Typography>
                        <Typography>{contract?.monthlyRent}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Rent Currency:</Typography>
                        <Typography>{contract?.rentCurrency}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Payment Day of Month:</Typography>
                        <Typography>{contract?.paymentDayOfMonth}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Tenant attached:</Typography>
                        <Typography>{contract?.tenantId ? 'Yes' : 'No'}</Typography>
                    </Grid>
                    <a href={linkToStorageFile?.url.toString()} target="_blank" rel="noreferrer">
                        Contract PDF 
                    </a>
                </Grid>
                {contract?.tenantId === null && (
                    <div>
                        <Button variant="contained" color="primary" style={{ marginTop: '20px' } }
                            onClick={() => navigate(`/landlord/property/contract/edit`, { state: { id: contract?.propertyId } })}>
                            Edit Contract
                        </Button>
                        <Button variant="contained" color="secondary" style={{ marginTop: '20px' }} onClick={async () => {
                            try {
                                const activeRequests = contract?.contractRequests.filter(request => request.status === 'Pending');
                                if (activeRequests.length > 0) {
                                    await client.models.ContractRequests.delete({ id: activeRequests[0].id });
                                }
                                await remove({ 
                                    key: contract.contractPdf ?? ''
                                });
                                await client.models.Contract.delete({ id: contractId });
                                navigate(`/landlord/property`, { state: { id: contract.propertyId } }); // Navigate to contracts list after deletion
                            } catch (error) {
                                console.error('Error deleting contract:', error);
                            }
                        }}>
                            Delete Contract
                        </Button>
                        { contract?.contractRequests.some(contract => contract.status === 'Pending') ? 
                        (
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Pending Tenant to connect</Typography>
                            </Grid>
                        ) : (
                        <div>
                            <TextField
                                label="Tenant Email"
                                variant="outlined"
                                fullWidth
                                onChange={handleEmailChange}
                                style={{ marginTop: '20px' }}
                            />
                            <Button
                                variant="contained"
                                color="inherit"
                                style={{ marginTop: '20px' }}
                                onClick={async () => {
                                    await handleConnectTenant();
                                    // Re-fetch the contract to update the state
                                    const contractData = await client.models.Contract.get({ 
                                        id: contractId
                                    }, { selectionSet: contractSelectionSet });
                                    if (contractData.data) {
                                        setContract(contractData.data);
                                    }
                                }}
                                disabled={!isEmailValid}
                            >
                                Connect Tenant On CoraLease
                            </Button>
                        </div> )}
                    </div>
                )}
            {contract?.tenantId !== null &&(
                <div>
                    <Typography variant="h6" gutterBottom>
                        Incidents
                    </Typography>
                    {contract?.incidents && contract.incidents.length > 0 ? (
                        <ul>
                            {contract.incidents.map((incident, index) => (
                                <li key={index}>
                                    <Typography variant="body1">{incident.description}</Typography>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Typography variant="body1">No incidents reported.</Typography>
                    )}
                </div>
            )}
            </Paper>
        </Container> } >
        </Route>
        <Route path="/edit" element={
            <ContractUpdateForm
              id={contract?.id}
              onSuccess={() => navigate(`/landlord/property/contract`, { state: { id: contract?.propertyId } })} // Navigate to contracts list after update}
              onError={(error: any) => console.error('Error updating contract:', error)}
            />
          } />
          <Route path="/connect-tenant" element={
            <ContractRequestsCreateForm
              id={contract?.id}
              onSuccess={() => navigate(`/landlord/property/contract`, { state: { id: contract?.propertyId } })} // Navigate to contracts list after update}
              onError={(error: any) => console.error('Error creating connecion request:', error)}
            />
          } />
        </Routes>
    );
};

export default LandlordManageContract;