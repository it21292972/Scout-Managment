import Adventure from "../../components/adventure/Adventure";
import Datatable from "../../components/SIdatatable/Datatable";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./FindBexaminer.scss";
import Fade from 'react-reveal/Fade';


const FindBexaminer = () => {
    return(
        <div className="FindBexaminer">
            
            <Navbar />
            <Slider />
            <Fade bottom>
            <Datatable/>
            <Adventure />
            </Fade>
            <Footer />
        
        </div>
    );
};

export default  FindBexaminer