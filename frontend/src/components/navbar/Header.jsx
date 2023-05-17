// import React from 'react'
// import "./header.scss"
// import CSlogo from './../../image/CSlogo.png'
// import NotificationsIcon from '@mui/icons-material/Notifications';    //remove after adding MUI
// import avatar from './../../image/login avatar.png'
// import {Link} from "react-router-dom"




// const Header = () => {
//   return (
//     <div className='navbarbadge'>
//       <img src={CSlogo} className='logo' alt='logo'/>
//       <div className="navContainer">
        
//         <div className="navItem">
//         {/* <a href="#"><Button variant="text" className='navbutton'>Home</Button></a>
//         <a href="./heenkenda.jsx"><Button variant="text" className='navbutton'>Badge Examination Request</Button></a>
//         <Button variant="text" className='navbutton'>Time Table</Button> */}

//         <Link to="/"
//         style={{textDecoration:"none"}}
//         className="navbutton1">
//         HOME</Link>

//         <Link to="/Addbe"
//         style={{textDecoration:"none"}}
//         className="navbutton2">
//         Add Badge Examiner</Link>

//         <Link to="/AddSM"
//         style={{textDecoration:"none"}}
//         className="navbutton3">
//         Add Scout Master</Link>

//         <Link to="/Viewbe"
//         style={{textDecoration:"none"}}
//         className="navbutton4">
//         View Badge Examiners</Link>

//         <Link to="/CalendarPage"                     //add link
//         style={{textDecoration:"none"}}
//         className="navbutton5">
//         Activity Calendar</Link>
        
//         </div>

//         <div className='rightnav'>
//        <NotificationsIcon className='navItem' sx={{ fontSize: 40 }}/>{/*remove after adding MUI*/}
//         {/* <ul><li className='status'>Sign in</li>
//         <li className='name'>Dharmasena U D S V</li>
//         <li className='destination'>Badge Examiner</li></ul>
//         <img className='profile' src={avatar} alt="profilephoto" /> */}
//         </div>


        
        
//       </div>
//     </div>
//   )
// }

// export default Header;



//part2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import React from 'react'
import "./header.scss"
import CSlogo from '../../image/CSlogo.png'
import {NavLink} from "react-router-dom"




const Header = () => {
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

        <NavLink to="/"
        style={{textDecoration:"none"}}
        className="navbutton1">
        Home</NavLink>

        <NavLink to="/Addbe"
        style={{textDecoration:"none"}}
        className="navbutton2">
        Add Badge Examiner</NavLink>

        <NavLink to="/AddSM"
        style={{textDecoration:"none"}}
        className="navbutton3">
        Add Scout Master</NavLink>

        <NavLink to="/Viewbe"
        style={{textDecoration:"none"}}
        className="navbutton4">
        View Badge Examiner</NavLink>
        
        
        <NavLink to="/CalendarPage"
        style={{textDecoration:"none"}}
        className="navbutton5">
        Calendar</NavLink>
        </div>


        
        
      </div>
    </div>
  )
}

export default Header;

