import React from 'react'
import "./navbar.scss"
import CSlogo from './../image/CSlogo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from './../image/a.png'
import {NavLink} from "react-router-dom"




const Navbarbadgeexaminer = () => {
  return (
    <div className='navbarbadge'>
      <img src={CSlogo} className='logo' alt='logo'/>
      <div className="navContainer">
        
        <div className="navItem">
        {/* <a href="#"><Button variant="text" className='navbutton'>Home</Button></a>
        <a href="./heenkenda.jsx"><Button variant="text" className='navbutton'>Badge Examination Request</Button></a>
        <Button variant="text" className='navbutton'>Time Table</Button> */}
{/* 
        <NavLink to="/badgeExaminerHome"
        style={{textDecoration:"none"}}
        className="navbutton1">
        HOME</NavLink> */}

        <NavLink to="/badgeExaminerRB"
        style={{textDecoration:"none"}}
        className="navbutton2">
        BADGE EXAMINATION REQUEST</NavLink>

        <NavLink to="/badgeExaminerTT"
        style={{textDecoration:"none"}}
        className="navbutton3">
        TIME TABLE</NavLink>

        <NavLink to="/"
        style={{textDecoration:"none"}}
        className="navbutton4">
        LOG OUT</NavLink>
        
        </div>

        <div className='rightnav'>
        <NotificationsIcon className='navItem' sx={{ fontSize: 40 }}/>
        <ul><li className='status'>Sign in</li>
        <li className='name'>Dharmasena U D S V</li>
        <li className='destination'>Badge Examiner</li></ul>
        <img className='profile' src={avatar} alt="profilephoto" />
        </div>


        
        
      </div>
    </div>
  )
}

export default Navbarbadgeexaminer;
