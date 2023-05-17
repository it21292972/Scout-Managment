import Adventure from "../../components/adventure/Adventure";
import BadgeReqUpdate from "../../components/badgeRequpdate/BadgeReqUpdate";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Fade from 'react-reveal/Fade';


const BadgeRequpdate = () => {
    return(
        <div className="badgerequp">
            
            <Navbar />
            <Slider />
            <Fade bottom>
            <BadgeReqUpdate/>
            <Adventure />
            </Fade>
            <Footer />
        
        </div>
    );
};

export default  BadgeRequpdate