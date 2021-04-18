import React from 'react';
import { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';

const AllBooks = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://vast-hollows-78144.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div className="table-div">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(orders => <OrderList key={orders._id} orders={orders}> </OrderList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;