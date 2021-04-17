import React from 'react';
import AddServices from '../AddServices/AddServices';
import AddFeedbacks from '../AddFeedbacks/AddFeedbacks';

const Dashboard = () => {
    return (
        <div>
            <h1>This is dashboard</h1>
            <AddServices></AddServices>
            <AddFeedbacks></AddFeedbacks>
        </div>
    );
};

export default Dashboard;