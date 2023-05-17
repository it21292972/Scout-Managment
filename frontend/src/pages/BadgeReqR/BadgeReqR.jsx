import  React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Adventure from '../../components/adventure/Adventure';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/footer/Footer';
import BadgeRequestTable from '../../components/badgeRequst/BadgeRequstTable';



const BadgeReq = () => {
    return(
        <div className="BadgeReq">
            <Navbar />
            <Slider />
            <Fade bottom>
            <BadgeRequestTable/>
            <Adventure />
            </Fade>
            <Footer/>
        
        </div>
    );
};

export default  BadgeReq