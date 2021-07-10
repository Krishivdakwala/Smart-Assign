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

  const handleFile = (event) => {
    let value;
    value = event.target.files[0];

    uploadFile({ file: value, email: currentUser.email, assignment: "assiXd" });
  };

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
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            {/* files */}
            <div>
              <label className="btn btn-secondary">
                <input
                  type="file"
                  onChange={handleFile}
                  name="photo1"
                  accept=".pdf,image/*"
                ></input>
              </label>
            </div>
            {/* files */}
          </div>
        </Container>
    </>
  );
}
