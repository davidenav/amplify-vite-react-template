// TenantIncidentsPage.tsx
import React from 'react';

interface TenantIncidentsPageProps {
  incidents: Array<{ id: string; description: string }>;
}

const TenantIncidentsPage: React.FC<TenantIncidentsPageProps> = ({ incidents }) => {
  return (
    <div>
      <h2>Your Incidents</h2>
      <ul style={styles.list}>
        {incidents.map((incident) => (
          <li key={incident.id} style={styles.listItem}>{incident.description}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  list: {
    listStyleType: 'none' as 'none',
    padding: '0',
    margin: '20px 0',
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
};

export default TenantIncidentsPage;