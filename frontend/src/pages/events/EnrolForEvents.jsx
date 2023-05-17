import Adventure from "../../components/adventure/Adventure";
import EventsForm from "../../components/eventsenroll/EventsForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Fade from 'react-reveal/Fade';
import Slider from "../../components/slider/Slider";


const EnrollForEvents = () => {
    return(
        <div className="EnrollForEvents">
            
            <Navbar />
            <Fade bottom>
            <Slider/>
            <EventsForm />
            <Adventure />
            </Fade>
            <Footer />
        
        </div>
    );
};

export default  EnrollForEvents