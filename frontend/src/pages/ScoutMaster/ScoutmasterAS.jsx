import React from 'react'
import NavbarScoutMaster from '../../components/NavbarScoutMaster'
import { useState } from "react";
import "./ScoutMasterAS.scss";
import Footer from '../../components/footer'


const Form = () => {

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [id, setid] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [user_name, setuser_name] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const emptyFields = [];
    if (!first_name) {
      emptyFields.push("first_name");
    }
    if (!last_name) {
      emptyFields.push("last_name");
    }
    if (!id) {
        emptyFields.push("id");
    }
    if (!date_of_birth) {
      emptyFields.push("date_of_birth");
    }
    if (!user_name) {
      emptyFields.push("user_name");
    }
    if (!password) {
      emptyFields.push("password");
    }
    
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      seterr("");
      return;
    }

    const details = { first_name, last_name, id, date_of_birth, user_name, password};

    const response = await fetch("http://localhost:5000/scout/", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    const json = await response.json();
    // if (!response.ok) {
    //   setError(json.error);
    // }
    if (!response.ok) {
      if (response.status === 500) {
        seterr("Wrong Details");
        //seterr(json.error);
    } else {
        seterr(json.err);
      }
    } else {

    
      setfirst_name("");
      setlast_name("");
      setid("");
      setdate_of_birth("");
      setuser_name("");
      setpassword("");
      seterr   (null);
      setEmptyFields([]);
      console.log("New Badge Request", json);
    }
  };

  return (
    
    <div className='scoutmasterAP'>
        <div><NavbarScoutMaster/></div>
    
    
    <form className="create" onSubmit={handleSubmit}>
      
    
      <h3 >Add scout </h3>
     
  
      <label> First Name: </label>
      {emptyFields.includes("first_name") && (
        <div className="error1">*Please fill the field</div>
      )}
      <input className="input1"
        type="text"
        placeholder="Enter the First name"
        onChange={(e) => setfirst_name(e.target.value)}
        value={first_name}
        />

      
        <label> Last Name: </label>
        {emptyFields.includes("last_name") && (
          <div className="error1">*Please fill the field</div>
        )}
        <input
          type="text"
          placeholder="Enter the Last Name"
          onChange={(e) => setlast_name(e.target.value)}
          value={last_name}
        />
  
    
        <label> Scout ID: </label>
        {emptyFields.includes("id") && (
          <div className="error1">*Please fill the field</div>
        )}
        <input
          type="text"
          placeholder="Enter id"
          onChange={(e) => setid(e.target.value)}
          value={id}
        />
  
        
        <label> Date of Birth: </label>
        {emptyFields.includes("date_of_birth") && (
            <div className="error1">*Incorrect Date</div>
      )}
      <input
        type="text"
        placeholder="Enter the date_of_birth"
        onChange={(e) => setdate_of_birth(e.target.value)}

        value={date_of_birth}
      />

<label> User Name : </label>
{emptyFields.includes("user_name") && (
  <div className="error2">*Please fill the field</div>
)}
<input className="input1"
  type="text"
  placeholder="Enter the User Name"
  onChange={(e) => setuser_name(e.target.value)}
  value={user_name}
  />


  <label> password : </label>
  {emptyFields.includes("password") && (
    <div className="error2">*Please fill the field</div>
  )}
  <input
    type="text"
    placeholder="Enter the password"
    onChange={(e) => setpassword(e.target.value)}
    value={password}
  />
  



<button>SUBMIT</button>
      {err && <div className="error1">{err}</div>}

      
    </form>
    <div><Footer/></div>
    </div>
   
  );
};


export default Form;
