import React from "react";


function Header(){

    return (
        <nav class="navbar navbar-expand-lg navbar-light"style={{backgroundColor:"#A8A8AE"}}>
  <a class="navbar-brand" href="#"style={{color:"white"}}><img src="./CSlogo.png" style={{width:"300px",height:"100px",marginRight:"10px"}} className="d-inline-block align-top"></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px",marginLeft:"30px"}} hover={{backgroundColor:"purple"}}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px",marginLeft:"20px"}}hover={{backgroundColor:"purple"}}>Activity Calendar</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px",marginLeft:"20px"}}>
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">ADCs</a>
          <a class="dropdown-item" href="#">Badge Examiners</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Downloads</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"style={{color:"black",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px",marginLeft:"20px"}}>Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header;