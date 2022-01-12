import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/experience" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
