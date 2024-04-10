import { useState } from 'react';
import './App.css';
import CourseContent from './components/CourseContent';
import CourseOfferings from './components/CourseOfferings';
import Curriculum from './components/Curriculum';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Mentors from './components/Mentors';
import Recruiters from './components/Recruiters';

function App() {

  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <CourseOfferings />
      <CourseContent />
      <Mentors />
      <Technologies />
      <Curriculum />
      <Recruiters />
    </div>
  );
}

export default App;
