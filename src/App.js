import React from "react";
import Signup from "./pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Landing from "./pages/Landing";
import "./App.css";
import UserProfile from "./components/UserProfile";
import LeftDrawer from "./components/LeftDrawer";
import TeacherForm from "./components/TeacherForm";
import TeacherAssignments from "./pages/TeacherAssignment";
import CreateAssignmentScreen from "./pages/CreateAssignment";
import StudentAssignments from "./pages/StudentAssignment";
import ViewTeacherAssignment from "./pages/ViewTeacherAssignment";
import SubmitAssignment from "./pages/SubmitAssignment";
import calendar from "./pages/Calendar";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute
                exact
                path="/dashboard/profile"
                component={UserProfile}
              />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />

              {/* studentName = studentEmail */}
              <Route
                path="/teacherForm/:studentName/:assignmentName"
                component={TeacherForm}
              />

              <Route
                path="/teacherAssignments"
                component={TeacherAssignments}
              />
              <Route
                path="/createAssignment"
                component={CreateAssignmentScreen}
              />
              <Route
                path="/ViewTeacherAssignment/:assignmentName"
                component={ViewTeacherAssignment}
              />
              <Route
                path="/studentAssignments"
                component={StudentAssignments}
              />
              <Route
                path="/submitAssignment/:assignmentName"
                component={SubmitAssignment}
              />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/calendar" component={calendar} />
            </Switch>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
