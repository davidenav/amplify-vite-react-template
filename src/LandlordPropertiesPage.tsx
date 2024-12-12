// LandlordPropertiesPage.tsx

import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { PropertyCreateForm } from '../ui-components';
import { propertyType, userProfileType } from "./CommonTypes";
import LandlordManageProperty from "./LandlordManageProperty";

interface LandlordPropertiesPageProps {
  properties: Array<propertyType>;
  userProfile: userProfileType;
}

const LandlordPropertiesPage: React.FC<LandlordPropertiesPageProps> = ({ properties, userProfile }) => {
  const navigate = useNavigate();

  const handlePropertyClick = (property: propertyType) => {
    navigate(`/landlord/properties/manage`, { state: { id: property.id } });
  };

  return (
    <div>
      <Routes>
          <Route path="/" element={
            <>
              <h2>Your Properties</h2>
              <ul style={styles.list}>
                {properties.map((property) => (
                  <li key={property.propertyAddress} style={styles.listItem} onClick={() => handlePropertyClick(property)}>{property.propertyAddress}</li>
                ))}
              </ul>
              <Link to="/landlord/properties/new" style={styles.addButton}>Add Property</Link>
            </>
          } />
          <Route path="/new" element={
            <div style={styles.fullScreenForm}>
              <PropertyCreateForm
                overrides={{  
                  ClearButton: {
                    display: 'none'}
                }}
                onSuccess={() => navigate("/landlord/properties")}
                onError={(error: any) => console.error('Error creating property:', error)}
                landlordIdInput={userProfile?.email}
              />
            </div>
          } />
          <Route path="/manage" element={<LandlordManageProperty />} />
      </Routes>
    </div>
  );
};

const styles = {
  list: {
    listStyleType: 'none' as 'none',
    padding: '10px',
    margin: '20px 0',
    backgroundColor: 'transparent',
  },
  listItem: {
    padding: '15px 20px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    fontSize: '18px',
    color: '#333',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  fullScreenForm: {
    position: 'fixed' as 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
};

export default LandlordPropertiesPage;