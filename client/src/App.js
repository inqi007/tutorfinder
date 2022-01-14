import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} exact></Route>
            <Route path="/home" element={<Home />} exact></Route>
            <Route path="/signin" element={<SignIn />} exact></Route>
            <Route path="/signup" element={<SignUp />} exact></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
