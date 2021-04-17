import React from 'react';
import feature from '../../resources/feature.jpg';

const Feature = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center mx-5">
            <div className="col-md-4 col-sm-6 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Our First Delivery <br/> A Vintage Car</h1>
                <p className="text-secondary">We were honoured to deliver such a masterpiece to one of our all time favorite client.</p>
                <button className="btn btn-warning text-white">Learn More</button>
            </div>
            <div className="col-md-6 col-sm-6">
                <img src={feature} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default Feature;