import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const CheckOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [service, setService] = useState(null);
    const history = useHistory();

    const onSubmit = data => {
        setService(data);
    }

    const handlePaymentSuccess = paymentId => {
        const order = {
            ...loggedInUser,
            ...service,
            paymentId
        };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('your order placed successfully');
                }
            })
        history.push(`/orders`);
    }
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="name" />
                    {errors.exampleRequired && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="email" />
                    {errors.exampleRequired && <span className="error">Name is required</span>}

                    <input name="address" {...register("address", { required: true })} placeholder="address" />
                    {errors.exampleRequired && <span className="error">Name is required</span>}

                    <input name="phone" {...register("phone", { required: true })} placeholder="phone" />
                    {errors.exampleRequired && <span className="error">Name is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div className="col-md-6">
                <h2>Please Pay Me</h2>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
};

export default CheckOut;