import React from 'react';
import './CourseContent.css'

function CourseContent() {
    const image = "https://th.bing.com/th/id/R.0cd7796b3c517d94a1cd77d2bf28d7df?rik=5BmqrQyZzGCSJw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_473965.png&ehk=z1OoZELEO37w22dPGXI4uIto6CJhD%2fx5aH7xFMCejRc%3d&risl=&pid=ImgRaw&r=0";
    return (
        <div className="course-content section section-center">
            <h3>Course Offerings</h3>
            <div className="grid">
                <div>
                    <img src={image} alt="image" />
                    <p>Industry Relevent Projects</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Skill Elevation: Exercise</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Doubt-clearing Sessions</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>PW Lab: Code Practice</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Career Centric Curriculum</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Certificate upon Completion</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Dashboard Q&A Forum</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Assignment Evaluation & Solutions</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Industry Experts: Live Sessions</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>3+ Career Guidance Sessions</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Community Channel Advantage</p>
                </div>
                <div>
                    <img src={image} alt="image" />
                    <p>Email Support Assistance</p>
                </div>
            </div>
        </div>
    )
}

export default CourseContent