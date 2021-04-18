import './Orders.css';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://vast-hollows-78144.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 col-sm-10 ms-auto orders">
                <h3 className="text-center text-white">You have: {orders.length} Orders</h3>
                <div className="table-container">
                    <table className="order-table table">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Service</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        {
                            orders.map(services =>
                                <tbody key={services._id}>
                                    <tr>
                                        <td>{loggedInUser.name}</td>
                                        <td>{services.service}</td>
                                        <td>{services.price}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Orders;