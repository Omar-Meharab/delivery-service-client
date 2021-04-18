import React from 'react';

const OrderList = (props) => {
    const { name, price, service } = props.orders;

    const deleteBook = (id) => {
        fetch(`https://vast-hollows-78144.herokuapp.com/deleteBook/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>  console.log('deleted'))
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{service}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteBook(props.books._id)} className="btn btn-warning">Delete</button></td>
        </tr>
    );
};

export default OrderList;