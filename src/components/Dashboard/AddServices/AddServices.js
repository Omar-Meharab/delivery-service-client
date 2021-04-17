import './AddServices.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors }  } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addServices`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res));
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd7b58dd4a615c2b48d8bd42eb97d1a8f');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <h1>Add Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Name" {...register("name")} />
                <br />
                <input name="price" defaultValue="$Price" {...register("price")} />
                <br />
                <input className="btn btn-warning" name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;