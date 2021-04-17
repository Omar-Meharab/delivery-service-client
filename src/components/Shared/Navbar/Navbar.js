import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand ms-5 fw-bold text-dark" href="#">Delivery Service</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link me-5 text-white fw-bold" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-white fw-bold" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-white fw-bold" href="#">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-white fw-bold" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-white fw-bold" href="#">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-white fw-bold" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;