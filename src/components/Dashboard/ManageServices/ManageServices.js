import React from 'react';
import { useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';
import './ManageServices.css';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://vast-hollows-78144.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <Sidebar></Sidebar>
            <div className="manage-services">
                <div className="col-md-10 col-sm-10 ms-auto">
                    <h3 className="text-center text-white">Services</h3>
                    <div className="table-container">
                        <table className="table service-table">
                            <thead>
                                <tr>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(services => <ServiceList key={services._id} services={services}> </ServiceList>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;