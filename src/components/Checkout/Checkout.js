import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';


const CheckOut = () => {
    const { id } =useParams();
    const [service, setService] = useState({});
    const history = useHistory();

    const handleOrder = () => {
        const order = {...loggedInUser, ...service};
        fetch('https://vast-hollows-78144.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        history.push(`/orders`);
    }

    fetch(`https://vast-hollows-78144.herokuapp.com/service/${id}`)
    .then(res => res.json())
    .then(data => setService(data))

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1>We WIll Soon Process Your Order</h1>
            <h2>Hello, {loggedInUser.name}! Your Book Is Here.</h2>
            <div className="table-div">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Buyer</th>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{loggedInUser.name}</td>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td className="btn btn-primary" onClick={handleOrder}>Confirm Order</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default CheckOut;