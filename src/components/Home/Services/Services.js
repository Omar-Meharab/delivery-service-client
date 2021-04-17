import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://vast-hollows-78144.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className="services-container">
            <div className="text-center text-uppercase">
                <h2 className="text-warning">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(services => <ServiceDetail services={services} key={services._id}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;