import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TopBanner from '../TopBanner/TopBanner';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
        </div>
    );
};

export default Header;