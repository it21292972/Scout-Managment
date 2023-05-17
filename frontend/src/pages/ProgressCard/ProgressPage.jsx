import ProgressC from "../../components/Progress/ProgressCom";
import Adventure from "../../components/adventure/Adventure";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Fade from 'react-reveal/Fade';


const Progress = () => {
    return(
        <div className="progresscard">
            
            <Navbar />
            <Slider />
            <Fade bottom>
            <ProgressC/>
            <Adventure />
            </Fade>
            <Footer />
        
        </div>
    );
};

export default Progress;