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
        
        <div className="navItem">
        
        
        <Link to="/badgeSecretary"
        style={{textDecoration:"none"}}
         className="navbutton1"
        >
        HOME</Link>

        <Link to="/badgeSecretaryBO"
        style={{textDecoration:"none"}}
         className="navbutton2"
        >
        BADGE ORDER REQUEST</Link>

        <Link to="/badgeSecretaryBIS"
        style={{textDecoration:"none"}}
        className="navbutton3">
        BADGE ISSUING SUMMARY</Link>
        </div>

        <div className='rightnav'>
        <NotificationsIcon className='navItem' sx={{ fontSize: 40 }}/>
        <ul><li className='status'>Sign in</li>
        <li className='name'>Dharmasena U D S V</li>
        <li className='destination'>Badge Secretary</li></ul>
        <img className='profile' src={avatar} alt="profilephoto" />
        </div>


        
        
      </div>
    </div>
  )
}

export default Navbarbadgesecretary;
