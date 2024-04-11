import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className="wrapper">
            <div className="footer section section-center">
                <div className="contact">
                    <h4>Skill Academy</h4>
                    <h5>Contact us</h5>
                    <div className="number">
                        <FaPhoneAlt />
                        <span> 1111-222-3333</span>
                    </div>
                    <br />
                    <div className="email">
                        <FaEnvelope />
                        <sapn> skillacademy@gmail.com</sapn>
                    </div>
                </div>
                <div className="skill-academy">
                    <ul>
                        <li><h4>Skill Academy</h4></li>
                        <li>Courses</li>
                        <li>Privacy policy</li>
                        <li>Terms & conditions</li>
                        <li>Pricing & refund policy</li>
                        <li>Bug bounty</li>
                        <li>Review</li>
                        <li>Press release</li>
                    </ul>
                </div>
                <div className="products">
                    <ul>
                        <li><h4>Products</h4></li>
                        <li>Upskilling Courses</li>
                        <li>Job Bootcamp</li>
                        <li>Code 360</li>
                        <li>Try courses for free</li>
                        <li>Mock Interviews</li>
                    </ul>
                </div>
                <div className="community">
                    <ul>
                        <li><h4>Community</h4></li>
                        <li>Events</li>
                        <li>Campus Ninja</li>
                        <li>Affiliate</li>
                        <li>Scholarship events</li>
                        <li>Hire from us</li>
                    </ul>
                </div>
            </div>
    </div>
    )
}

export default Footer