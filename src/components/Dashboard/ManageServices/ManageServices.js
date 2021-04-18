import React from 'react';
import { useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

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
            <div style={containerStyle}>
                <div>
                    <table className="table">
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
        </section>
    );
};

export default ManageServices;