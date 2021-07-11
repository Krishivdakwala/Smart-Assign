//Dashboard.js page is the starting page for a student or teacher after login
//All features can be accessed from the dashboard


import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import LeftDrawer from "../components/LeftDrawer";
import { AuthProvider } from "../contexts/AuthContext"
import { getStudentData, uploadFile } from "../api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserProfile from "../components/UserProfile";
import PrivateRoute from "../components/PrivateRoute"

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }



  useEffect(() => {
    getStudentData(currentUser.email);
  }, []);

  return (
    <>
      <div>
        <LeftDrawer />
      </div>
      
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "85vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            {/* files */}
            
            {/* files */}
          </div>
        </Container>
    </>
  );
}
