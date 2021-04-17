import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '100px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Your first order will have 10% discount. Which one do you need? Just tell Uus</p>
            <p className="text=danger fs-bold">Prices will vary</p>
            <button className="btn btn-warning text-white">Order Now</button>
        </div>
    );
};

export default ServiceDetail;