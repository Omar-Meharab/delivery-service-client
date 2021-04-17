import React from 'react';
import bike from '../../resources/bike.png';
import car from '../../resources/car.png';
import truck from '../../resources/truck.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Bike Delivery',
        img: bike
    },
    {
        name: 'Car Delivery',
        img: car
    },
    {
        name: 'Truck Delivery',
        img: truck
    }
]

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center text-uppercase">
                <h2 className="text-warning">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;