// UserRolePage.tsx
import React from 'react';

interface UserRolePageProps {
  setRole: (role: string) => void;
  name: string;
}

const UserRolePage: React.FC<UserRolePageProps> = ({ setRole, name }) => {
  return (
    <div style={styles.container}>
      <p style={styles.greeting}>Hi {name}, Would you like the landlord or tenant mode?</p>
      <div style={styles.roleButtons}>
        <button style={styles.roleButton} onClick={() => setRole('landlord')}>Landlord</button>
        <button style={styles.roleButton} onClick={() => setRole('tenant')}>Tenant</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  greeting: {
    fontSize: '24px',
    margin: '20px 0',
    color: '#333',
  },
  roleButtons: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    gap: '20px',
    margin: '20px 0',
  },
  roleButton: {
    width: '250px',
    height: '60px',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default UserRolePage;