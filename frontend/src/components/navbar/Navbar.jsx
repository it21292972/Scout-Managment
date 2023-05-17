import React from 'react';
import './navbar.scss';
import CSlogo from '../../images/CSlogo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../../images/login avatar.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarbadge">
      <img src={CSlogo} className="logo" alt="logo" />
      <div className="navContainer">
        <div className="navItem">
          <NavLink to="/" style={{ textDecoration: 'none', marginRight: '10px' }} className="navbutton1">
            HOME
          </NavLink>
          <NavLink to="/AddEvent" style={{ textDecoration: 'none', marginRight: '10px' }} className="navbutton2">
            ADD EVENT
          </NavLink>
          <NavLink to="/ViewEvent" style={{ textDecoration: 'none', marginRight: '10px' }} className="navbutton2">
            VIEW EVENT
          </NavLink>
          <NavLink to="/BudgetCalculator" style={{ textDecoration: 'none' }} className="navbutton1">
            BUDGET CALCULATOR
          </NavLink>
        </div>

        <div className="rightnav">
          <NotificationsIcon className="navItem" sx={{ fontSize: 40 }} />
          <ul>
            <li className="status">Sign in</li>
            <li className="name">Dharmasena U D S V</li>
            <li className="destination">Badge Examiner</li>
          </ul>
          <img className="profile" src={avatar} alt="profilephoto" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
