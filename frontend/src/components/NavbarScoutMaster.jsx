import React from 'react'
import "./navbar.scss"
import CSlogo from './../image/CSlogo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from './../image/a.png'
import {Link} from "react-router-dom"

const NavbarScoutMaster = () => {
  return (
    <div className='navbarbadge'>
      <img src={CSlogo} className='logo' alt='logo'/>
      <div className="navContainer">
      
        <Link to="/ScoutMaster"
        style={{textDecoration:"none"}}
         className="navbutton1"
        >
        HOME</Link>

        <Link to="/badgeSecretaryBO"
        style={{textDecoration:"none"}}
         className="navbutton2"
        >
        Shop</Link>

        <Link to="/ScoutmasterAS"
        style={{textDecoration:"none"}}
         className="navbutton3"
        >
        Add Scout</Link>

        <Link to="/ScoutList"
        style={{textDecoration:"none"}}
         className="navbutton4"
        >
        Scout List</Link>


{/*   
        <Link to="/ScoutmasterPV"
        style={{textDecoration:"none"}}
        className="navbutton5">
        Progress view</Link>

        <Link to="/ScoutmasterBP"
        style={{textDecoration:"none"}}
        className="navbutton6">
        Badge Request</Link>

        <Link to="/ScoutmasterT"
        style={{textDecoration:"none"}}
        className="navbutton7">
        Task</Link>  */}

        <div className='rightnav'>

        <div class="dropdown">
    <button class="dropbtn">More
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#"> Progress view</a>
      <a href="#">Badge Request</a>
      <a href="#">Task</a>
    </div>
    </div>
        <NotificationsIcon className='navItem' sx={{ fontSize: 40 }}/>
        <ul><li className='status'>Sign in</li>
        </ul>
        <img className='profile' src={avatar} alt="profilephoto" />
        </div>
        
        

        


        
        
      </div>
    </div>
  )
}

export default NavbarScoutMaster;
