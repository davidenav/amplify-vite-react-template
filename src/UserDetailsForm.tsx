import React, { useState } from 'react';

function UserDetailsForm({ emailParam, setUserDetailsParam}: { emailParam: string; setUserDetailsParam: (details: { name: string; email: string; phone: string }) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(emailParam);
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const userDetails = { name, email, phone };
    setUserDetailsParam(userDetails);
  };

  return (
    <form id="user-details-form" onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="name" style={styles.label}>Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={styles.input}
      />
      
      <label htmlFor="email" style={styles.label}>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        disabled
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
      />
      
      <label htmlFor="phone" style={styles.label}>Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={styles.input}
      />
      
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '10px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: '20px auto',
    width: '90%',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default UserDetailsForm;