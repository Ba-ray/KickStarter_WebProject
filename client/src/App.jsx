import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
