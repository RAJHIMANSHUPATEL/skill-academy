import React, { useContext } from 'react';
import './Navbar.css'
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from '../hooks/context';
import Sidebar from './Sidebar';

function Navbar() {
    const { showHM, toggleSidebar } = useContext(AppContext);
    return (
        <header>
            {showHM && <Sidebar />}
            <nav className='navbar section-center'>
                <div className="logo"><h4>SKILL <br /> ACADEMY</h4></div>
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>My Courses</li>
                    <li>Job Portal</li>
                    <li>Help/Support</li>
                </ul>
                <div className='login'>Login <FaUser /></div>
                <div className="hamburger-menu" onClick={toggleSidebar} >
                    {showHM ? <FaTimes /> : <FaBars />}
                </div>
            </nav>
        </header>
    )
}

export default Navbar