import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUsers, faList } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://vast-hollows-78144.herokuapp.com/isAdmin`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                    isAdmin ?
                        <div>
                            <div>
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
                                <li>
                                    <Link to="/orders" className="text-white text-decoration-none">
                                        <FontAwesomeIcon icon={faList} /> <span>Orders</span>
                                    </Link>
                                </li>
                            </div>
                        </div> :
                        <div>
                            <div>
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
                            </div>
                        </div>}
            </ul>
        </div>
    );
};

export default Sidebar;