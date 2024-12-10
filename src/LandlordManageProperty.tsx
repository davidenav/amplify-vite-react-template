import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { propertyType, propertySelectionSet } from './CommonTypes';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const LandlordManageProperty: React.FC = () => {
  const location = useLocation();
  const propertyId = location.state?.id;
  const [property, setProperty] = useState<propertyType>(); 

    const client = generateClient<Schema>();
    const fetchProperty = async () => {
    try {
    const property = await client.models.Property.get({ 
        id: propertyId 
    },
    { selectionSet: propertySelectionSet });
    if (property.data) {
        setProperty(property.data);
    }
    } catch (error) {
        console.error('Error fetching property:', error);
        throw error;
    }
  };

  fetchProperty();

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
};

export default LandlordManageProperty;