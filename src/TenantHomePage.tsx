import { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { SelectionSet } from "aws-amplify/api";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";
import logo from './assets/images/lease.png';
import TenantManageContract from './TenantManageContract';
import TenantAcceptContract from './TenantAcceptContract';

interface TenantHomePageProps {
  signOut: () => void;
  userEmail: string;
}

export const tenantSelectionSet = ['email', 'tenantContracts.*', 'contractRequests.id', 'contractRequests.status', 
    'contractRequests.type', 'contractRequests.contract.*'] as const;
export type tenantType = SelectionSet<Schema['UserProfile']['type'], typeof tenantSelectionSet>;

const LandlordHomePage: React.FC<TenantHomePageProps> = ({ signOut, userEmail }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tenant, setTenant] = useState<tenantType | null>(null);
  const client = generateClient<Schema>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
        try {
            const contractData = await client.models.UserProfile.get({ 
                email: userEmail
            },
            { selectionSet: tenantSelectionSet });
            if (contractData.data) {
                setTenant(contractData.data);
            }
        } catch (error) {
            console.error('Error fetching teants data:', error);
        }
        };

        fetchContracts();
  }, []);

  return (
    <>
      <header style={styles.header}>
          <img src={logo} alt="Logo" />
          <div style={styles.title}>
            <div>CoraLease</div>
            <div>for Tenants</div>
          </div>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburger}>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
            <div style={styles.hamburgerLine}></div>
          </button>
        {menuOpen && (
          <div style={styles.menu}>
            <button onClick={signOut} className="menuItem" style={styles.menuItem}>Sign out</button>
            <Link to="/tenant" className="menuItem" style={styles.menuItem} onClick={() => setMenuOpen(false)}>Home</Link>
          </div>
        )}
      </header>
      <main style={styles.main}>
        <Routes>
            <Route path="/*" element={
                <>
                    <section style={styles.section}>
                        <h2>My Contracts</h2>
                        <ul style={styles.list}>
                            {
                                tenant?.tenantContracts
                                .sort((a, b) => new Date(a.startDate ?? '').getTime() - new Date(b.startDate ?? '').getTime())
                                .map((contract, index) => {
                                    const isActive = new Date(contract.startDate ?? '') <= new Date() && new Date(contract.endDate ?? '') >= new Date();
                                    return (
                                        <li key={index} style={{ ...styles.listItem, backgroundColor: isActive ? 'lightgreen' : '#ffffff' }} 
                                            onClick={() => navigate(`/tenant/contract`, { state: { id: contract.id } })}>
                                            <div>
                                                <strong>Start Date:</strong> {contract.startDate} <br />
                                                <strong>End Date:</strong> {contract.endDate}
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </section>
                    <section style={styles.section}>
                        <h2>My Contract Requests</h2>
                        <ul style={styles.list}>
                            {tenant?.contractRequests.filter((request) => request.status === 'Pending' && request.type === 'New')
                                .filter((request) => request.status === 'Pending' && request.type === 'New')
                                .sort((a, b) => new Date(a.contract.startDate ?? '').getTime() - new Date(b.contract.startDate ?? '').getTime())
                                .map((request, index) => {
                                    const contract = request.contract;
                                    return (
                                        <li key={index} style={{ ...styles.listItem, backgroundColor: '#ffffff' }} 
                                            onClick={() => navigate(`/tenant/contract/approve`, { state: { id: request.id } })}>
                                            <div>
                                                <strong>Start Date:</strong> {contract.startDate} <br />
                                                <strong>End Date:</strong> {contract.endDate}
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </section>
                   <section style={styles.section}>
                        <h2>Open Incidents</h2>
                        <ul style={styles.list}>
                            {/* List of open incidents will go here */}
                        </ul>
                    </section></>
            } />
            <Route path="/contract/*" element={< TenantManageContract />} />
            <Route path="/contract/approve/*" element={< TenantAcceptContract />} />
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
        fontSize: '18px',
        color: '#333',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};

export default LandlordHomePage;