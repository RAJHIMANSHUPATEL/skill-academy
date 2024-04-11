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
import Reviews from './components/Reviews';
import Footer from './components/Footer';

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
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
