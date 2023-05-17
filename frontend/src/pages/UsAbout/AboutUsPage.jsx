import AboutUsCom from "../../components/ABOUT-US/AboutUsCom";
import Adventure from "../../components/adventure/Adventure";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Fade from 'react-reveal/Fade';


const about = () => {
    return(
        <div className="aboutus">
            
            <Navbar />
            <Slider />
            <Fade bottom>
            <AboutUsCom/>
            <Adventure />
            </Fade>
            <Footer />
        
        </div>
    );
};

export default about;