import React from 'react';

const ServiceList = (props) => {
    const { service, price } = props.services;

    const deleteService = (id) => {
        fetch(`https://vast-hollows-78144.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>  console.log('deleted'))
    }
    
    return (
        <tr>
            <td>{service}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteService(props.services._id)} className="btn btn-warning">Delete</button></td>
        </tr>
    );
};

export default ServiceList;