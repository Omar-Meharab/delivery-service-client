import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Feedbacks from '../Feedbacks/Feedbacks';
import Projects from '../Projects/Projects';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Services></Services>
            <Feedbacks></Feedbacks> 
            <Feature></Feature>
            <Footer></Footer>
        </div>
    );
};

export default Home;