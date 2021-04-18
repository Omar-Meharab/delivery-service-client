import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGripHorizontal, faUsers, faList } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-decoration-none text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faList} /> <span>Orders</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addFeedbacks" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add Feedbacks</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addServices" className="text-white text-decoration-none" >
                      <FontAwesomeIcon icon={faCog} /> <span>Add Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageServices" className="text-white text-decoration-none" >
                      <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;