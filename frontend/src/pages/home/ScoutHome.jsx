import Adventure from "../../components/adventure/Adventure";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Tasks from "../../components/tasks/Tasks";
import "./ScoutHome.scss";
import Fade from 'react-reveal/Fade';


const ScoutHome = () => {
    return(
        <div className="ScoutHome">
            
            <Navbar />
            <Slider />
            <Fade bottom>
            <Tasks />
            <Adventure />
            </Fade>
            <Footer />
        
        </div>
    );
};

export default  ScoutHome