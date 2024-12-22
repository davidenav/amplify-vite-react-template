import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import type { Schema } from "../amplify/data/resource";
import { SelectionSet } from "aws-amplify/api";
import { generateClient } from "aws-amplify/data";
import { getUrl, GetUrlWithPathOutput } from 'aws-amplify/storage';

export const contractSelectionSet = ['id', 'propertyId', 'startDate', 'endDate', 'monthlyRent', 'paymentDayOfMonth', 'rentCurrency', 
    'contractDescription', 'tenantId', 'contractPdf', 'incidents.*'] as const;
export type contractType = SelectionSet<Schema['Contract']['type'], typeof contractSelectionSet>;

const TenantManageContract: React.FC = () => {
    const location = useLocation();
    const contractId = location.state?.id;
    const [contract, setContract] = useState<contractType | null>(null); 

    const client = generateClient<Schema>();
    const [linkToStorageFile, setLinkToStorageFile] = useState<GetUrlWithPathOutput>();

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
            < br/>
            <Button variant="contained" color="primary" disabled style={{ backgroundColor: 'grey' }}>
                Open a new Incident
            </Button>
        </Container> } >
        </Route>
        </Routes>
    );
};

export default TenantManageContract;