import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    return (
        <div>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;