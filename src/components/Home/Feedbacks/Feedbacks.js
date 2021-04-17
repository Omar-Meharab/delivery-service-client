import React, { useState, useEffect } from 'react';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';
import './Feedbacks.css';


const Testimonials = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('https://vast-hollows-78144.herokuapp.com/feedbacks')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data);
            })
    }, [])
    return (
       <section className="feedbacks my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h1 className="text-warning text-uppercase">Customer Feedback</h1>
               </div>
               <div className="card-group row mt-5">
                    {
                        feedbacks.map(feedbacks => <FeedbackDetail feedbacks={feedbacks} key={feedbacks.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;