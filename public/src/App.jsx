import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import EducationPage from './pages/EducationPage';
import BlogPage from './pages/BlogPage';
import ActivitiesPage from './pages/ActivitiesPage';
import CareerBlog from './pages/CareerBlog';
import BooksBlog from './pages/BooksBlog';
import GymBlog from './pages/GymBlog';
import OtherBlog from './pages/OtherBlog';
import AllBlog from './pages/AllBlog';

function App() {
    return (
    <div className='app flex flex-col min-h-screen'>
      <Router>
        <Navbar />
        <div className="flex-grow flex-shrink">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/Career" element={<CareerBlog />} />
            <Route path="/blog/Books" element={<BooksBlog />} />
            <Route path="/blog/Gym" element={<GymBlog />} />
            <Route path="/blog/Other" element={<OtherBlog />} />
            <Route path="/blog/all" element={<AllBlog />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      <footer className="flex items-center h-16 px-4 border-t md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-700">© 2024 Abdullah Shamout Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;