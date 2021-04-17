import React from 'react';
import banner from '../../resources/banner.jpg';

const TopBanner = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center mx-5">
            <div className="col-md-6 col-sm-6">
                <img src={banner} alt="" className="img-fluid" />
            </div>
            <div className="col-md-4 col-sm-6 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Delivery Service <br /> Bike, Car, Truck <br/> We Do It All</h1>
                <p className="text-secondary">Free shipping on certain conditions. Grab the chance to deliver what seems to burden you.</p>
                <button className="btn btn-warning text-white">Order Now</button>
            </div>
        </main>
    );
};

export default TopBanner;