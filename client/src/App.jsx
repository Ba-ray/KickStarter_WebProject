
import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import SignIn from "./pages/SignIn";
import Register from './pages/Register';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
   
  );
}

export default App;

