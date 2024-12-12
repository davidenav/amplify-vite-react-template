import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { propertyType, propertySelectionSet } from './CommonTypes';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const LandlordManageProperty: React.FC = () => {
  const location = useLocation();
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
    <div style={styles.container}>
      <h1>Property Details</h1>
      <div style={styles.field}>
        <strong>Address:</strong> {property?.propertyAddress}
      </div>
      <div style={styles.field}>
        <strong>Type:</strong> {property?.propertyType}
      </div>
      <div style={styles.field}>
        <strong>Size:</strong> {property?.propertySize}
      </div>
      <div style={styles.field}>
        <strong>Description:</strong> {property?.propertyDescription}
      </div>
      <button style={styles.publishButton}>Publish</button>
      <section style={styles.contractSection}>
        <h2>Contract Status</h2>
        <button style={styles.button}>New Contract</button>
        <button style={styles.button}>Current Contract</button>
        <button style={{ ...styles.button, ...styles.disabledButton }} disabled>Future Contract</button>
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
  },
};

export default LandlordManageProperty;