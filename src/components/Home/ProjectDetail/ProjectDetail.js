import React from 'react';

const ProjectDetail = (props) => {
    const { description, name, img } = props.projects;
    return (
        <div className="col-sm-6 my-3">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h1 className="text-primary card-text text-left ms-3">{name}</h1>
                    <p className="card-text text-left ms-3">{description}</p>
                </div>
                <div className="card-footer d-flex  align-items-center">
                    <img className="mx-3" src={img} alt="" width="200" />                    
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;