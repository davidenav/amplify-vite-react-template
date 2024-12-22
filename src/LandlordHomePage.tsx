import { useEffect, useState } from 'react';
import { SelectionSet } from "aws-amplify/api";
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { PropertyCreateForm } from '../ui-components';
import logo from './assets/images/lease.png';
import LandlordManageProperty from "./LandlordManageProperty";

const client = generateClient<Schema>();

export const propertyHeaderSelectionSet = ['id', 'displayName', 'street', 'city', 'zip', 'country', 'contracts.startDate', 'contracts.endDate', 
    'contracts.incidents.id', 'contracts.incidents.title', 'contracts.incidents.status', 'contracts.incidents.date'] as const;
export type propertyHeaderType = SelectionSet<Schema['Property']['type'], typeof propertyHeaderSelectionSet>;

interface LandlordHomePageProps {
  signOut: () => void;
  userEmail: string;
}

type openIncidentsType = {
    id: string;
    title: string;
    date: string;
}

type propertyType = {
    id: string;
    displayName: string;
    address: string;
    currentContract: boolean;
    endDateOfCurrentContract: string;
    incidents: Array<openIncidentsType>;
}

const LandlordHomePage: React.FC<LandlordHomePageProps> = ({ signOut, userEmail }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [properties, setProperties] = useState<Array<propertyType>>([]);
  const [incidents, setIncidents] = useState<Array<openIncidentsType>>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const sub = client.models.Property.observeQuery({
        filter: {
            landlordId: {
                eq: userEmail
            },
        },
        selectionSet: [...propertyHeaderSelectionSet]
    }).subscribe({
      next: (data) => {
        setProperties(data.items.map(item => {
            const address = `${item.street}, ${item.city}, ${item.country} ${item.zip}`;
            const currentDate = new Date().toISOString();
            const currentContracts = item.contracts?.filter(contract => contract.startDate && contract.endDate && contract.startDate <= currentDate && contract.endDate >= currentDate) ?? [];
            if (currentContracts.length > 1) {
            console.error('More than one current contract found for property:', item.displayName);
            }
            return {
                id: item.id,
                displayName: item.displayName ?? '',
                address: address,
                currentContract: currentContracts.length > 0,
                endDateOfCurrentContract: currentContracts.length > 0 ? currentContracts[0].endDate ?? '' : '',
                incidents: currentContracts.length > 0 ? currentContracts[0].incidents.filter(incident => incident.status === 'Open').map(incident => {
                    return {
                        id: incident.id,
                        title: incident.title ?? '',
                        date: incident.date ?? '',
                    };
                }) : []
            };
        }));
        setIncidents(properties.flatMap(item => item.incidents));
    }});
    return () => sub.unsubscribe();
  }, []);

  const handlePropertyClick = (property: propertyType) => {
    navigate(`/landlord/property`, { state: { id: property.id } });
  };

  const handleIncidentClick = (incident: openIncidentsType) => {
    navigate(`/landlord/incident/manage`, { state: { id: incident.id } });
  };

  return (
    <>
      <header style={styles.header}>
          <img src={logo} alt="Logo" />
          <div style={styles.title}>
            <div>CoraLease</div>
            <div>for Landlords</div>
          </div>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
          </button>
        {menuOpen && (
          <div style={styles.menu}>
            <button onClick={signOut} className="menuItem" style={styles.menuItem}>Sign out</button>
            <Link to="/landlord" className="menuItem" style={styles.menuItem} onClick={() => setMenuOpen(false)}>Home</Link>
          </div>
        )}
      </header>
      <main style={styles.main}>
        <Routes>
            <Route path="/*" element={
                <>
                <h2>Your Properties</h2>
                <ul style={styles.list}>
                  {properties.map((property) => (
                    <li key={property.id} style={styles.listItem} onClick={() => handlePropertyClick(property)}>
                        <div> 
                            <p>{property.displayName}</p>
                            <p style={{ fontSize: '12px' }}>{property?.address}</p>
                            {
                                property?.currentContract ? <p style={{ fontSize: '12px' }}>Contract ends at {property?.endDateOfCurrentContract}</p> : <p style={{ fontSize: '14px' }}>No active contract</p>
                            }
                            {
                                property?.incidents.length > 0 ? <p style={{ fontSize: '14px' }}>Property has open incidents</p> :  <p style={{ fontSize: '14px' }}>No active incidents</p>
                            }
                        </div>
                    </li>
                  ))}
                </ul>
                <Link to="/landlord/properties/new" style={styles.addButton}>Add Property</Link>
                <h2>Your Incidents</h2>
                {incidents.length === 0? (<p>No incidents found!</p>) :
                (<ul style={styles.list}> {incidents.map((incident) => (
                    <li key={incident.id} style={styles.listItem} onClick={() => handleIncidentClick(incident)}>{incident.id}</li>
                  ))}
                </ul>)}
              </>
            } />
            <Route path="/properties/new" element={
                <div >
                    <PropertyCreateForm
                        overrides={{  
                        ClearButton: {
                            display: 'none'}
                        }}
                        onSuccess={() => navigate("/landlord")}
                        onError={(error: any) => console.error('Error creating property:', error)}
                        landlordIdInput={userEmail}
                    />
                </div>
            } />
          <Route path="/property/*" element={<LandlordManageProperty />} />
        </Routes>
      </main>
    </>
  );
};

const styles = {
    header: {
        backgroundColor: '#add8e6', // Light blue background color
        padding: '10px 20px',
        borderBottom: '1px solid #dee2e6',
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        height: '40px',
    },
    title: {
        fontSize: '32px', // Enlarged text size
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center' as 'center',
        flex: 1,
    },
    hamburger: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-around',
        width: '30px',
        height: '30px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        boxSizing: 'border-box' as 'border-box',
        marginLeft: 'auto', // Align hamburger menu to the right
    },
    hamburgerLine: {
        width: '30px',
        height: '3px',
        backgroundColor: '#333',
        borderRadius: '5px',
        transition: 'all 0.3s linear',
        position: 'relative' as 'relative',
        transformOrigin: '1px',
    },
    menu: {
        position: 'absolute' as 'absolute',
        top: '60px',
        right: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    menuItem: {
        padding: '10px 20px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'left' as 'left',
        fontSize: '16px',
        color: '#333',
        borderBottom: '1px solid #dee2e6',
        textDecoration: 'none',
        display: 'block',
    },
    main: {
        padding: '20px',
        paddingTop: '80px', // Add padding to the top to avoid overlap with the header
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
    },
    section: {
        marginBottom: '40px',
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
};

export default LandlordHomePage;