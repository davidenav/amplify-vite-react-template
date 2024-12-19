import React, { useState, useEffect } from 'react';
import { SelectionSet } from "aws-amplify/api";
import { Route, Routes, useLocation, Link, useNavigate } from 'react-router-dom';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { ContractCreateForm } from '../ui-components'; // Import the ContractCreateForm component

export const propertySelectionSet = ['id', 'landlordId', 'displayName', 'street', 'city', 'zip', 'country', 'type', 'size', 'numberOfRooms', 'floor', 'hasElevator', 
    'hasBalcony', 'hasParking', 'hasSaferoom', 'description', 'contracts.startDate', 'contracts.endDate'] as const;
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
          // const contracts = await propertyData.data.contracts;
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
                    <h2>Contract Status</h2>
                    <Link to="/landlord/property/contract/new" style={styles.addButton}>New Contract</Link>
                </section>
                <section style={styles.paymentSection}>
                    <h2>Payment Status</h2>
                    <div style={styles.field}>
                    <strong>Date:</strong> <span>2023-10-01</span>
                    </div>
                    <div style={styles.field}>
                    <strong>Amount:</strong> <span>1000</span>
                    </div>
                    <div style={styles.field}>
                    <strong>Currency:</strong> <span>USD</span>
                    </div>
                    <button style={{ ...styles.button, ...styles.latePaymentButton }}>Report Late Payment</button>
                </section>
                </div>
            </>
        } />
        <Route path="/contract/new" element={
            <div >
                <ContractCreateForm
                    onSuccess={() => navigate(`/landlord/property`, { state: { id: propertyId } })}
                    onError={(error: any) => console.error('Error creating contract:', error)}
                    propertyId={propertyId}
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
}
};

export default LandlordManageProperty;