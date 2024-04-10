import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import './Sidebar.css'
import { AppContext } from '../hooks/context';

function Sidebar() {
    const {showHM} = useContext(AppContext)
    return (
        <div className={`${showHM? 'sidebar section show-sidebar' : 'sidebar section'}`}>
            <ul className='section-center'>
                <li>Home</li>
                <li>Courses</li>
                <li>My Courses</li>
                <li>Job Portal</li>
                <li>Help/Support</li>
            </ul>
        </div>
    )
}

export default Sidebar