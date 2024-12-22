import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import type { Schema } from "../amplify/data/resource";
import { SelectionSet } from "aws-amplify/api";
import { generateClient } from "aws-amplify/data";
import { getUrl, GetUrlWithPathOutput } from 'aws-amplify/storage';

export const contractRequestSelectionSet = ['id', 'tenantId', 'contract.*'] as const;
export type contractRequestsType = SelectionSet<Schema['ContractRequests']['type'], typeof contractRequestSelectionSet>;

const TenantAcceptContract: React.FC = () => {
    const location = useLocation();
    const contractRequestId = location.state?.id;
    const [contractRequest, setContractRequest] = useState<contractRequestsType | null>(null); 

    const client = generateClient<Schema>();
    const [linkToStorageFile, setLinkToStorageFile] = useState<GetUrlWithPathOutput>();

    useEffect(() => {
        const fetchContract = async () => {
        try {
            const contracRequesttData = await client.models.ContractRequests.get({ 
            id: contractRequestId
            },
            { selectionSet: contractRequestSelectionSet });
            if (contracRequesttData.data) {
                setContractRequest(contracRequesttData.data);
                const linkToStorageFile = await getUrl({ path: contracRequesttData?.data?.contract?.contractPdf ?? '' });
                setLinkToStorageFile(linkToStorageFile);
            }
        } catch (error) {
            console.error('Error fetching contract:', error);
        }
        };

        fetchContract();
    }, [contractRequestId]);

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
                        <Typography>{contractRequest?.contract?.startDate}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">End Date:</Typography>
                        <Typography>{contractRequest?.contract?.endDate}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Rent Amount:</Typography>
                        <Typography>{contractRequest?.contract?.monthlyRent}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Rent Currency:</Typography>
                        <Typography>{contractRequest?.contract?.rentCurrency}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Payment Day of Month:</Typography>
                        <Typography>{contractRequest?.contract?.paymentDayOfMonth}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6">Tenant attached:</Typography>
                        <Typography>{contractRequest?.contract?.tenantId ? 'Yes' : 'No'}</Typography>
                    </Grid>
                    <a href={linkToStorageFile?.url.toString()} target="_blank" rel="noreferrer">
                        Contract PDF 
                    </a>
                </Grid>
            </Paper>
            <Grid container spacing={2} justifyContent="flex-end" style={{ marginTop: '20px' }}>
                <Grid item>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={async () => {
                            try {
                                await client.models.ContractRequests.update({
                                    id: contractRequestId,
                                    type: 'New',
                                    contractId: contractRequest?.contract?.id,
                                    status: "Approved",
                                    tenantId: contractRequest?.tenantId
                                });
                                await client.models.Contract.update({
                                    id: contractRequest?.contract?.id ?? '',
                                    propertyId: contractRequest?.contract.propertyId,
                                    tenantId: contractRequest?.tenantId,
                                    startDate: contractRequest?.contract?.startDate,
                                    endDate: contractRequest?.contract?.endDate,
                                    monthlyRent:contractRequest?.contract?.monthlyRent,
                                    paymentDayOfMonth: contractRequest?.contract?.paymentDayOfMonth,
                                    rentCurrency: contractRequest?.contract?.rentCurrency,
                                    contractDescription: contractRequest?.contract?.contractDescription,
                                    contractPdf: contractRequest?.contract?.contractPdf,
                                    extensionOption:{
                                        extension: contractRequest?.contract?.extensionOption?.extension,
                                        extensionPeriod: contractRequest?.contract?.extensionOption?.extensionPeriod,
                                        extensionPeriodType:contractRequest?.contract?.extensionOption?.extensionPeriodType,
                                        extensionPrice: contractRequest?.contract?.extensionOption?.extensionPrice,
                                        extensionPriceCurrency: contractRequest?.contract?.extensionOption?.extensionPriceCurrency,
                                    },
                                });
                                window.location.href = '/tenant';
                            } catch (error) {
                                console.error('Error accepting contract:', error);
                            }
                        }}
                    >
                        Accept
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={async () => {
                            const reason = prompt('Please enter the reason for rejection:');
                            if (reason) {
                                try {
                                    await client.models.ContractRequests.update({
                                        id: contractRequestId,
                                        type: 'New',
                                        contractId: contractRequest?.contract?.id,
                                        status: "Rejected",
                                        responseText: reason,
                                        tenantId: contractRequest?.tenantId
                                    });
                                    window.location.href = '/tenant';
                                } catch (error) {
                                    console.error('Error rejecting contract:', error);
                                }
                            }
                        }}
                    >
                        Reject
                    </Button>
                </Grid>
            </Grid>
        </Container> } >
        </Route>
        </Routes>
    );
};

export default TenantAcceptContract;