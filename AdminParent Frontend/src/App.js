import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard_Admin from "./admin/App";
import Addstudent from "./admin/containers/AddStudent";
import Createclass from './admin/containers/CreateClasses';
import Registration from './admin/containers/Registration';
import Removestudent from './admin/containers/RemoveStudent';

import Dashboard_Parent from "./parent/App";
import Dashboard from "./parent/containers/Dashboard/Dashboard";
import Profile from "./parent/containers/Profile/Profile";
import Notifications from "./parent/containers/Notifications/Notifications";


function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route
          path="/"
          element={
            auth ? (
              <Dashboard_Admin setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
        <Route path="addstudent" element={<Addstudent />} />
        <Route path="createclasses" element={<Createclass />} />
        <Route path="registration" element={<Registration />} />
        <Route path="removestudent" element={<Removestudent />} />  

        <Route path="dashboard" element={<Dashboard/>} />   
        <Route path="dashboard_parent" element={<Dashboard_Parent/>} />   
        <Route path="profile" element={<Profile />} />  
        <Route path="notifications" element={<Notifications />} />  
  
      </Routes>
    </>
  );
}

export default App;
