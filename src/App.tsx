import { useEffect, useState } from "react";
import { SelectionSet } from "aws-amplify/api";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { UserProfileUpdateForm } from '../ui-components';
import UserRolePage from './UserRolePage'; // Import the new component
import TenantHomePage from './TenantHomePage'; // Import the new component
import LandlordHomePage from './LandlordHomePage'; // Import the new component
import logo from './assets/images/lease.png';

const userProfileSelectionSet = ['displayName', 'givenName', 'lastName', 'email', 'phoneNumber', 'street', 'city', 'zip', 'country', 'gender', 'birthday'] as const;
type userProfileType = SelectionSet<Schema['UserProfile']['type'], typeof userProfileSelectionSet>

const client = generateClient<Schema>();
interface AppProps {
  showHamburger: boolean;
  signOut: () => void;
  user: any;
}

function App({ showHamburger, signOut, user }: AppProps) {
  const [userProfile, setUserProfile] = useState<userProfileType>(); 
  const [userName, setUserName] = useState<string>('Guest'); 
  const [menuOpen, setMenuOpen] = useState(false);
  // const [_, setShowUserProfileForm] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user?.signInDetails?.loginId) {
        try {
          const profile = await client.models.UserProfile.get({ 
            email: user.signInDetails.loginId 
          },
          { selectionSet: userProfileSelectionSet });
          if (profile.data) {
            setUserProfile(profile.data);
            setUserName(profile.data.givenName ?? profile.data.displayName ?? 'Guest');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  function setRole(role: string) {
    setUserRole(role);
    console.log(`User role set to: ${role}`);
  }

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <div className="title">CoraLease</div>
        {showHamburger && (
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}
        {menuOpen && (
          <div className="menu">
            <Link to="/update-profile" className="menuItem" onClick={() => setMenuOpen(false)}>Update Profile</Link>
            <button onClick={handleSignOut} className="menuItem">Sign out</button>
          </div>
        )}
      </header>
      <main style={styles.main}>
        <Routes>
          <Route path="/update-profile" element={
            <UserProfileUpdateForm
              email={userProfile?.email}
              //userProfile={userProfile}
              onSuccess={() => navigate('/')}
              onError={(error: any) => console.error('Error updating profile:', error)}
            />
          } />
         <Route path="/tenant/*" element={
            userProfile ? (
              <TenantHomePage signOut={handleSignOut} userEmail={userProfile.email} />
            ) : (
              <Navigate to="/" />
            )
          } />
          <Route path="/landlord/*" element={
            userProfile ? (
              <LandlordHomePage signOut={handleSignOut} userEmail={userProfile.email} />
            ) : (
              <Navigate to="/" />
            )
          } />
          <Route path="/" element={
            <>
              {(!userRole)? (
                <UserRolePage setRole={setRole} name={userName} /> 
              ) : userRole === 'landlord' ? (
                <Navigate to="/landlord" />
              ) : (
                <Navigate to="/tenant" />
              )}
            </>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  '@media (max-width: 600px)': {
    main: {
      padding: '10px',
    },
    title: {
      fontSize: '20px',
    },
    roleButton: {
      width: '100%',
      height: '50px',
      padding: '10px',
    },
    listItem: {
      padding: '10px',
      fontSize: '16px',
    },
    addButton: {
      width: '100%',
      padding: '10px',
    },
  },
};

export default App;
