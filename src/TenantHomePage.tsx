import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import logo from './assets/images/lease.png';

interface TenantHomePageProps {
  signOut: () => void;
  userEmail: string;
}

const LandlordHomePage: React.FC<TenantHomePageProps> = ({ signOut, userEmail }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    userEmail// get contract
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
            <Link to="/tenant/incidents" className="menuItem" style={styles.menuItem} onClick={() => setMenuOpen(false)}>My Incidents</Link>
          </div>
        )}
      </header>
      <main style={styles.main}>
        <Routes>
            <Route path="/*" element={
                <>
                   <section style={styles.section}>
                        <h2>Open Incidents</h2>
                        <ul style={styles.list}>
                            {/* List of open incidents will go here */}
                        </ul>
                    </section></>
            } />
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
    padding: '0',
    margin: '0',
  },
};

export default LandlordHomePage;