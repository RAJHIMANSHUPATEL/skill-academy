import React from 'react';
import './CourseOfferings.css';

function CourseOfferings() {
    return (
        <div className="course-offerings section-center">
            <div className="course-features section-center">
                <div className="assistance">
                    <h4>Job Assistance</h4>
                    <h5>Support</h5>
                </div>
                <div className="sessions">
                    <h4>200+ </h4>
                    <h5>Lectures</h5>
                </div>
                <div className="duration">
                    <h4>9 Months</h4>
                    <h5>Duration</h5>
                </div>
                <div className="projects">
                    <h4>10+</h4>
                    <h5>Hands-on Project</h5>
                </div>
                <div className='mentorship'>
                    <h4>Expert Mentorship</h4>
                    <h5>Guidance</h5>
                </div>
                <div className="delivery-mode">
                    <h4>Blended</h4>
                    <h5>Delivery Mode</h5>
                </div>
            </div>
        </div>
    )
}

export default CourseOfferings