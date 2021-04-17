import React from 'react';

const FeedbackDetail = (props) => {
    const { description, name, imageURL } = props.feedbacks;
    
    return (
        <div className="col-sm-6 my-3">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="card-text text-left ms-3">{description}</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={imageURL} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackDetail;