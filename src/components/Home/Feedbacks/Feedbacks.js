import React from 'react';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';
import './Feedbacks.css';
import customer1 from '../../resources/customer1.jpg';
import customer2 from '../../resources/customer2.jpg';
import customer3 from '../../resources/customer3.jpg';

const testimonialData = [
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'customer 01',
        img : customer1
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'customer 02',
        img : customer2
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'customer 03',
        img : customer3
    }
]

const Testimonials = () => {
    return (
       <section className="feedbacks my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h1 className="text-warning text-uppercase">Customer Feedback</h1>
               </div>
               <div className="card-group row mt-5">
                    {
                        testimonialData.map(feedback => <FeedbackDetail feedback={feedback} key={feedback.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;