import  React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Adventure from '../../components/adventure/Adventure';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';


const BadgeReq = () => {
    return(
        <div className="BadgeReq">
            <Navbar />
            <Slider />
            <Fade bottom>
            <Form/>
            <Adventure />
            </Fade>
            <Footer/>
        
        </div>
    );
};

export default  BadgeReq