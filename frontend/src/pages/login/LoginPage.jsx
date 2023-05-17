import './login.scss';
import React, { useContext } from 'react';
import profile from "./../../image/a.png";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import {Link} from "react-router-dom"
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

const Login = () =>{

const userRef = useRef();
const passwordRef = useRef();
const {user, dispatch, isFetching} = useContext(Context)

const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"Login_Start"})
    try{
        const res = axios.post("/auth/login",{
            username:useRef.current.value,
            password: passwordRef.current.value,
        })
        dispatch({type:"Login_Success", payload:res.data})

    }catch(err){
        dispatch({type:"Login_Failure"})


    }
};
console.log(user);


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
           <form className="loginForm" onSubmit={handleSubmit}>
           <div>
           <EmailOutlinedIcon className='email'/>
             <input type="text" placeholder="Username" className="name" ref={userRef}/>
           </div>
           <div className="second-input">
             <KeyOutlinedIcon className="email"/>
             <input type="password" placeholder="Password" className="name" ref={passwordRef}/>
           </div>
          <button className="loginButton" type = "submit">Login</button>
          </form>
         
           
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

export default Login;