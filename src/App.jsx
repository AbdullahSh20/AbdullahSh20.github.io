import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import EducationPage from './pages/EducationPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
