import React, { useState, useEffect } from 'react';
import { SelectionSet } from "aws-amplify/api";
import { Route, Routes, useLocation, Link, useNavigate } from 'react-router-dom';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { ContractCreateForm } from '../ui-components'; // Import the ContractCreateForm component
import LandlordManageContract from './LandlordManageContract'; // Import the LandlordManageContract component

export const propertySelectionSet = ['id', 'landlordId', 'displayName', 'street', 'city', 'zip', 'country', 'type', 'size', 'numberOfRooms', 'floor', 'hasElevator', 
    'hasBalcony', 'hasParking', 'hasSaferoom', 'description', 'contracts.id', 'contracts.startDate', 'contracts.endDate'] as const;
export type propertyType = SelectionSet<Schema['Property']['type'], typeof propertySelectionSet>;

const LandlordManageProperty: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const propertyId = location.state?.id;
  const [property, setProperty] = useState<propertyType | null>(null); 

  const client = generateClient<Schema>();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const propertyData = await client.models.Property.get({ 
          id: propertyId
        },
        { selectionSet: propertySelectionSet });
        if (propertyData.data) {
          setProperty(propertyData.data);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [propertyId]);

  return (
    <Routes>
        <Route path="/" element={
            <>
                <div style={styles.container}>
                <h1>Property Details</h1>
                <div style={styles.field}>
                    <strong>Address:</strong> {property?.street}, {property?.city}, {property?.country} {property?.zip}
                </div>
                <div style={styles.field}>
                    <strong>Type:</strong> {property?.type}
                </div>
                <div style={styles.field}>
                    <strong>Size:</strong> {property?.size}
                </div>
                <div style={styles.field}>
                    <strong>Number of Rooms:</strong> {property?.numberOfRooms}
                </div>
                <div style={styles.field}>
                    <strong>Floor:</strong> {property?.floor}
                </div>
                <div style={styles.field}>
                    <strong>Has Elevator:</strong> {property?.hasElevator ? 'Yes' : 'No'}
                </div>
                <div style={styles.field}>
                    <strong>Has Balcony:</strong> {property?.hasBalcony ? 'Yes' : 'No'}
                </div>
                <div style={styles.field}>
                    <strong>Has Parking:</strong> {property?.hasParking ? 'Yes' : 'No'}
                </div>
                <div style={styles.field}>
                    <strong>Has Saferoom:</strong> {property?.hasSaferoom ? 'Yes' : 'No'}
                </div>
                <div style={styles.field}>
                    <strong>Description:</strong> {property?.description}
                </div>
                <button style={{ ...styles.button, ...styles.disabledButton }} disabled>Publish On Marketplace</button>
                <section style={styles.contractSection}>
                    {property?.contracts && property.contracts.length > 0 && (
                        <div>
                            <h2>Contracts</h2>
                            <ul style={styles.list}>
                                {property.contracts
                                    .sort((a, b) => new Date(a.startDate ?? '').getTime() - new Date(b.startDate ?? '').getTime())
                                    .map((contract, index) => {
                                        const isActive = new Date(contract.startDate ?? '') <= new Date() && new Date(contract.endDate ?? '') >= new Date();
                                        return (
                                            <li key={index} style={{ ...styles.listItem, backgroundColor: isActive ? 'lightgreen' : '#ffffff' }} 
                                                onClick={() => navigate(`/landlord/property/contract`, { state: { id: contract.id } })}>
                                                <div>
                                                    <strong>Start Date:</strong> {contract.startDate} <br />
                                                    <strong>End Date:</strong> {contract.endDate}
                                                </div>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    )}
                    <Link to="/landlord/property/contract/new" style={styles.addButton}>New Contract</Link>
                </section>
                </div>
            </>
        } />
        <Route path="/contract/*" element={<LandlordManageContract />} />
        <Route path="/contract/new" element={
            <div >
                <ContractCreateForm
                    propertyId={ property?.id }
                    onSuccess={() => navigate(`/landlord/property`, { state: { id: property?.id } })}
                    onError={(error: any) => console.error('Error creating contract:', error)}
                    onValidate={{
                        startDate: (value, validationResponse) => {
                            const existingContracts = property?.contracts || [];
                            const isStartDateConflict = existingContracts.some(contract => {
                                const startDate = contract.startDate ? new Date(contract.startDate) : new Date(8640000000000000);
                                const endDate = contract.endDate ? new Date(contract.endDate) : new Date(-8640000000000000);
                                const newStartDate = new Date(value);
                                return newStartDate >= startDate && newStartDate <= endDate;
                            });

                            if (isStartDateConflict) {
                                validationResponse.hasError = true;
                                validationResponse.errorMessage = 'The start date conflicts with an existing contract.';
                            }
                            return validationResponse;
                        },
                        endDate: (value, validationResponse) => {
                            const existingContracts = property?.contracts || [];
                            const isStartDateConflict = existingContracts.some(contract => {
                                const startDate = contract.startDate ? new Date(contract.startDate) : new Date(8640000000000000);
                                const endDate = contract.endDate ? new Date(contract.endDate) : new Date(-8640000000000000);
                                const newStartDate = new Date(value);
                                return newStartDate >= startDate && newStartDate <= endDate;
                            });

                            if (isStartDateConflict) {
                                validationResponse.hasError = true;
                                validationResponse.errorMessage = 'The start date conflicts with an existing contract.';
                            }
                            return validationResponse;
                        }
                    }}
                />
            </div>
        } />
    </Routes>

  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  field: {
    marginBottom: '10px',
  },
  contractSection: {
    marginTop: '40px',
  },
  paymentSection: {
    marginTop: '40px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    transition: 'background-color 0.3s ease',
    marginBottom: '10px',
  },
  disabledButton: {
    backgroundColor: '#6c757d', // Grey background color
    cursor: 'not-allowed',
  },
  latePaymentButton: {
    backgroundColor: '#dc3545', // Red background color
  },
  publishButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#28a745', // Green background color
    color: 'white',
    transition: 'background-color 0.3s ease',
    marginBottom: '20px',
    disable : 'true',
  },
  addButton: {
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center' as 'center',
  },
  list: {
    listStyleType: 'none' as 'none',
    padding: '10px',
    margin: '20px 0',
    backgroundColor: 'transparent',
    border: 'none', // Remove the border
    },
    listItem: {
        padding: '15px 20px',
        marginBottom: '10px',
        borderRadius: '8px',
        fontSize: '18px',
        color: '#333',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};

export default LandlordManageProperty;