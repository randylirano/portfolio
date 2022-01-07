import React from "react";
import NavBar from "../components/NavBar";
import "../stylesheets/main.css";

const LandingPage = () => {
  return (
    <div className="container">
      <NavBar/>
      <header>
        <div id="landing-text">
          <h1>Randy Lirano</h1>
          <h2>Thank you for visiting my portfolio. Feel free to look around.</h2>
        </div>
      </header>
      
    </div>
  );
}

export default LandingPage;