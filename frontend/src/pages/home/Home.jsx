import "./home.css"
import {Button} from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import campfire from './campfire.jpg'
import camporee from './camporee.jpeg' 
import jamboree from './jamboree.jpg'
import Navbar from "../../components/navbar/Navbar";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
<div className="homepage">
   <Navbar/>

    
      

    <div className="container">

    <div className="box">
    <h2>Campfire Event</h2>

    <img src={campfire} alt="My Image" class="hover-effect" style={{ width: "250px", height: "350px",
     marginLeft:"45px",marginTop:"0px",borderRadius:"4%", }} />
     

        <div className="button">

            <Link to="/AddEvent">
            <Button startIcon={<ControlPointIcon/>} variant="contained" sx={{
             backgroundColor:"#880ED4",
             color:"black",
             margin:5,
          }}>Add Event</Button>
            </Link>

          </div>

        </div>


        <div class="box">
    
        <h2>Camporee Event</h2>

        <img src={camporee } alt="My Image" class="hover-effect" style={{ width: "250px", height: "350px",
     marginLeft:"45px",marginTop:"0px",borderRadius:"4%"  }} />
      
        <div className="button">
        <Link to="/AddEvent">
            <Button startIcon={<ControlPointIcon/>} variant="contained" sx={{
             backgroundColor:"#880ED4",
             color:"black",
             margin:5,
          }}>Add Event</Button>
            </Link>
          </div>
        </div>


        <div class="box">

        <h2 >Jamboree Event</h2>
        
        <img src={jamboree} alt="My Image" class="hover-effect" style={{ width: "250px", height: "350px",
     marginLeft:"45px",marginTop:"0px", borderRadius:"4%" }} />


        <div className="button">
        <Link to="/AddEvent">
            <Button startIcon={<ControlPointIcon/>} variant="contained" sx={{
             backgroundColor:"#880ED4",
             color:"black",
             margin:5,
          }}>Add Event</Button>
            </Link>
          </div>
        </div>
       
    </div>



    </div>
  );
};

export default Home;