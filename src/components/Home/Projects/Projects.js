import React from 'react';
import './Projects.css';
import project1 from '../../resources/project1.jpg';
import project2 from '../../resources/project2.jpg';
import project3 from '../../resources/project3.jpg';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const testimonialData = [
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'project 01',
        img : project1
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'project 02',
        img : project2
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'project 03',
        img : project3
    }
]

const Testimonials = () => {
    return (
       <section className="projects my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h1 className="text-warning text-uppercase">Past Projects</h1>
               </div>
               <div className="card-group row mt-5">
                    {
                        testimonialData.map(projects => <ProjectDetail projects={projects} key={projects.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;