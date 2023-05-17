import React from 'react'
import "./Navbar.scss"
import CSlogo from "../../image/CSlogo.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../../image/a.png';
import {Link} from "react-router-dom"




const Navbar = () => {
  return (
    <div className='navbarbadge'>
      <img src={CSlogo} className='logo' alt='logo'/>
      <div className="navContainer">
        
        <div className="navItem">
        {/* <a href="#"><Button variant="text" className='navbutton'>Home</Button></a>
        <a href="./heenkenda.jsx"><Button variant="text" className='navbutton'>Badge Examination Request</Button></a>
        <Button variant="text" className='navbutton'>Time Table</Button> */}

        <Link to="/Home"
        style={{textDecoration:"none"}}
        className="navbutton1">
        Home</Link>

      
       

        <Link to="/BadgeRequestTable"
        style={{textDecoration:"none"}}
        className="navbutton3">
        Requests</Link>

        <Link to="/"
        style={{textDecoration:"none"}}
        className="navbutton3">
        Shop</Link>

        <Link to="/AboutUs"
        style={{textDecoration:"none"}}
        className="navbutton3">
        About Us</Link>

        <Link to="https://colomboscouts.lk/"
        style={{textDecoration:"none"}}
        className="navbutton3">
        More Info</Link>

        <Link to="/"
        style={{textDecoration:"none"}}
        className="navbutton4">
        Log Out</Link>
        
        </div>

        <div className='rightnav'>
        <Link to="/Profile">
        <img className='profile' src={avatar} alt="profilephoto" /></Link>
        
        </div>


        
        
      </div>
    </div>
  )
}

export default Navbar





