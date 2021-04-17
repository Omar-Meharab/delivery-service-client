import './AddFeedbacks.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddFeedbacks = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://vast-hollows-78144.herokuapp.com/addFeedbacks`
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
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 col-sm-10 ms-auto feedback py-5">
                <div className="container">
                    <div className="section-header text-center text-white mb-5">
                        <h1 className="text-primary">Add Feedback</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input className="form-control" name="name" defaultValue="Name" {...register("name")} />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input name="description" className="form-control py-5" defaultValue="Description" {...register("description")} />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input className="btn btn-warning form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
                            </div>
                            <br/>
                            <input className="btn btn-primary" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddFeedbacks;