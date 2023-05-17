import React from "react";
import "./Footer.scss"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
        <div className="item">
            <br></br>
        <h2>DO YOU NEED ANY</h2>
        <h1>SUPPORT?</h1>
        </div>

        <div className="item">
            <br></br>
        <p1><CallIcon className='call' sx={{ fontSize: 20 }}/>+94 77 758 0646</p1><br></br>
        <p2><EmailIcon className="Email" sx={{ fontSize: 20 }}/>colombo.district@gmail.com</p2>
        </div>
        </div>

      <div className="bottom"> 
      <div className="left">
        <span className="copyright"> 
        Copyright ©2023 Sri Lanka Scout Association, Colombo District Branch. All Rights Reserved.</span>
        </div>
      <div className="right">
      <div className="1">
      <FacebookIcon className="Facebook" sx={{ fontSize: 20 }}/></div>
      <div className="1">
      <InstagramIcon className="Instagram" sx={{ fontSize: 20 }}/></div>
      <div className="1">
      <TwitterIcon className="Twitter" sx={{ fontSize: 20 }}/></div>
      <div className="1">
      <LinkedInIcon className="LinkedIn" sx={{ fontSize: 20 }}/></div>
      <div className="1">
      <YouTubeIcon className="YouTube" sx={{ fontSize: 20 }}/></div>
      

      </div>

      </div>
      </div>
          

      
    
    )
}

export default Footer