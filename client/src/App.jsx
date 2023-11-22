import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Services from "./pages/Services";
import FormProject from "./pages/FormProject";
import ProjectPage from "./pages/ProjectPage.jsx";
import Profile from "./pages/profile.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/FormProject" element={<FormProject />} />
        <Route path="/project/:projectId" element={<ProjectPage/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
