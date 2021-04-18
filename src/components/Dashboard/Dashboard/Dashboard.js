import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    return (
        <div>
            <div style={containerStyle} className="row">
                <div className="col-md-2 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h1>This is Dashboard</h1>
                    <h4>Navigate Through The Sidebar</h4>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;