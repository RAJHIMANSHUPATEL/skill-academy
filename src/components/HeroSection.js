import React from 'react';
import { FaDownload } from "react-icons/fa";
import './HeroSection.css'
import HeroImg from '../assets/generativeAI.jpg';

function HeroSection() {
    return (
        <div className="hero-section section-center section">
            <div className="hero-info">
                <h2 className='hero-course'>exploring generative AI: unleash creative potential</h2>
                <p className='hero-course-info'>Dive into Generative AI with our expert-led course. From ethical considerations to real-world applications, unlock limitless creativity and revolutionize your process. Join us to chart the future of AI innovation.</p>
                <div className="hero-course-price">
                    <h3>₹20,000</h3>
                    <span className="discount">
                        <h4>₹29,000</h4>
                    </span>
                </div>
                <div className="enroll">
                    <button className='btn'>Enroll Now</button>
                    <button className='btn'><FaDownload/> Brochure</button>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="generative-ai" />
            </div>
        </div>
    )
}

export default HeroSection