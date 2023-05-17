import './login.scss';

import profile from "./../../image/a.png";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import {Link} from "react-router-dom"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Login = () =>{
  return (
    
    <div className="login">
      
    <div className="main">
    <div className='shop'>
    <LocalGroceryStoreIcon className='cart'/>
    <Link to="/badgeExaminerTT"
        style={{textDecoration:"none"}}
        className="shopbutton">
        GO TO STORE</Link>
    </div>
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login</h1>
           <div>
           <EmailOutlinedIcon className='email'/>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             <KeyOutlinedIcon className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
           
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> 
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
    </div>
  );
}

export default Login;