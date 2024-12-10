import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';
import logo from './assets/images/lease.png'; // Adjust the path as needed

Amplify.configure(outputs);

function Main() {
  return (
    <React.StrictMode>
      <Router>
        <div className="app-container">
          <header>
            <img src={logo} alt="Logo" />
            <div className="title">CoraLease</div>
          </header>
          <div className="auth-container">
            <Authenticator signUpAttributes={[
              'preferred_username',
              'given_name',
              'family_name',
              'phone_number',
              'birthdate',
            ]}>
              {({ signOut, user }) => {
                if (!signOut) {
                  throw new Error("signOut is undefined");
                }
                return (
                  <ThemeProvider>
                    <Routes>
                      <Route path="*" element={
                        <div className="main-content">
                          <App showHamburger={!!user} signOut={signOut} user={user} />
                        </div>
                      } />
                    </Routes>
                  </ThemeProvider>
                );
              }}
            </Authenticator>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
