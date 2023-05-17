import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Update(){

    const {id}=useParams();
    const [values, setValues] = useState({
        id: id,
        first_name: '',
        registration_number: '',
        last_name: '',
        password:''
        
    })
    useEffect(()=>{
        axios.get(`http://localhost:5000/ScoutMaster/${id}`)
        .then(res =>{
            setValues({...values, first_name:res.data.first_name, last_name:res.data.last_name, registration_number: res.data.registration_number, password: res.data.password})
        })
        .catch(err => console.log(err))  

    }, [])

    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/ScoutMaster/update/${id}`,values)
        .then(res =>{
            navigate('/ScoutmasterMP');
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                <div>
                        <label htmlFor ="name">first_name:</label>
                        <input type="text" name='name' className='form=control' placeholder='Enter First Name' value={values.first_name} onChange={e => setValues({...values,first_name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="email">Last Name:</label>
                        <input type='text' name='first_name' className='form-control' placeholder='Enter Laste Name' value={values.last_name} onChange={e => setValues({...values,last_name: e.target.value})}/>
                    </div><br/>
                    <div>
                        <label htmlFor ="id">Phone :</label>
                        <input type="text" name='phone' className='form=control' placeholder='Enter ID' value={values.phone} onChange={e => setValues({...values,phone: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor ="id">Address :</label>
                        <input type="text" name='Address' className='form=control' placeholder='Enter ID' value={values.address} onChange={e => setValues({...values,address: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor ="id">Date Of Birth :</label>
                        <input type="text" name='Address' className='form=control' placeholder='Enter ID' value={values.dob} onChange={e => setValues({...values,dob: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor ="id">Badge :</label>
                        <input type="text" name='Address' className='form=control' placeholder='Enter ID' value={values.dob} onChange={e => setValues({...values,dob: e.target.value})}/>
                    </div>
                    <button className='btn btn-info'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Update


// import React from 'react'
// import NavbarScoutMaster from '../../components/NavbarScoutMaster'
// import { useState } from "react";
// import "./ScoutMasterAS.scss";
// import Footer from '../../components/footer'


// const Form = () => {
//   const [FirstName, setFirstName] = useState("");
//   const [LastName, setLastName] = useState("");
//   const [SID, setSID] = useState("");
//   const [DOB, setDOB] = useState("");
//   const [UserName, setUserName] = useState("");
//   const [Password, setPassword] = useState("");
//   const [err, seterr] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const emptyFields = [];
//     if (!FirstName) {
//       emptyFields.push("FirstName");
//     }
//     if (!LastName) {
//       emptyFields.push("LastName");
//     }
//     if (!SID) {
//         emptyFields.push("SID");
//     }
//     if (!DOB) {
//       emptyFields.push("DOB");
//     }
//     if (!UserName) {
//       emptyFields.push("UserName");
//     }
//     if (!Password) {
//       emptyFields.push("Password");
//     }
    
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       seterr("");
//       return;
//     }

//     const details = { FirstName, LastName, SID, DOB, UserName, Password};

//     const response = await fetch("http://localhost:5000/ScoutMaster/add", {
//       method: "POST",
//       body: JSON.stringify(details),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     // if (!response.ok) {
//     //   setError(json.error);
//     // }

//     if (!response.ok) {
//       if (response.status === 500) {
//         seterr("Wrong Details");
//     } else {
//         seterr(json.err);
//       }
//     } else {

    
//       setFirstName("");
//       setLastName("");
//       setSID("");
//       setDOB("");
//       setUserName("");
//       setPassword("");
//       seterr   (null);
//       setEmptyFields([]);
//       console.log("New Badge Request", json);
//     }
//   };

//   return (
    
//     <div className='scoutmasterAP'>
//         <div><NavbarScoutMaster/></div>
    
    
//     <form className="create" onSubmit={handleSubmit}>
      
    
//       <h3 >Add scout </h3>
     
  
//       <label> First Name: </label>
//       {emptyFields.includes("FirstName") && (
//         <div className="error1">*Please fill the field</div>
//       )}
//       <input className="input1"
//         type="text"
//         placeholder="Enter the First name"
//         onChange={(e) => setFirstName(e.target.value)}
//         value={FirstName}
//         />

      
//         <label> Last Name: </label>
//         {emptyFields.includes("LastName") && (
//           <div className="error1">*Please fill the field</div>
//         )}
//         <input
//           type="text"
//           placeholder="Enter the Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//           value={LastName}
//         />
  
    
//         <label> Scout ID: </label>
//         {emptyFields.includes("SID") && (
//           <div className="error1">*Please fill the field</div>
//         )}
//         <input
//           type="text"
//           placeholder="Enter SID"
//           onChange={(e) => setSID(e.target.value)}
//           value={SID}
//         />
  
        
//         <label> Date of Birth: </label>
//         {emptyFields.includes("DOB") && (
//             <div className="error1">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter the DOB"
//         onChange={(e) => setDOB(e.target.value)}
//         value={DOB}
//       />

// <label> User Name : </label>
// {emptyFields.includes("UserName") && (
//   <div className="error2">*Please fill the field</div>
// )}
// <input className="input1"
//   type="text"
//   placeholder="Enter the User Name"
//   onChange={(e) => setUserName(e.target.value)}
//   value={UserName}
//   />


//   <label> Password : </label>
//   {emptyFields.includes("Password") && (
//     <div className="error2">*Please fill the field</div>
//   )}
//   <input
//     type="text"
//     placeholder="Enter the Password"
//     onChange={(e) => setPassword(e.target.value)}
//     value={Password}
//   />
  



// <button>SUBMIT</button>
//       {err && <div className="error1">{err}</div>}

      
//     </form>
//     <div><Footer/></div>
//     </div>
   
//   );
// };


// export default Form;





/*import React from 'react'
import NavbarScoutMaster from '../../components/NavbarScoutMaster'
import { useState } from "react";
import "./ScoutMasterEP.scss";

const Form = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phone, setphone] = useState("");
  const [Addresss, setAddresss] = useState("");
  const [DOB, setDOB] = useState("");
  const [Badge, setBadge] = useState("");
  const [SMID, setSMID] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const emptyFields = [];
    if (!FirstName) {
      emptyFields.push("FirstName");
    }
    if (!LastName) {
      emptyFields.push("LastName");
    }
    if (!phone) {
        emptyFields.push("phone");
    }
    if (!Addresss) {
      emptyFields.push("Addresss");
    }
    if (!DOB) {
      emptyFields.push("DOB");
    }
    if (!Badge) {
      emptyFields.push("Badge");
    }
    if (!SMID) {
      emptyFields.push("Scout master's ID");
    }
    
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      setError("Please fill in all fields");
      return;
    }

    const stock = { FirstName, LastName, phone, Addresss, DOB, Badge, SMID };

    const response = await fetch("/food", {
      method: "POST",
      body: JSON.stringify(stock),
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
        setError("Wrong Badge Name");
    } else {
        setError(json.error);
      }
    } else {

    
      setFirstName("");
      setLastName("");
      setphone("");
      setAddresss("");
      setDOB("");
      setBadge("");
      setSMID("");
      setError   (null);
      setEmptyFields([]);
      console.log("New Badge Request", json);
    }
  };
  return (
    
    <div className='scoutmasterEP'>
        <div><NavbarScoutMaster/></div>
       
      
   
    
    
    <form className="create" >
    <form1 className="create1" onSubmit={handleSubmit} >

      <h3 >Request for a Badge Examination </h3>
     
  
      <label> First Name : </label>
      {emptyFields.includes("FirstName") && (
        <div className="error1">*Please fill the field</div>
      )}
      <input className="input1"
        type="text"
        placeholder="Enter the Section"
        onChange={(e) => setFirstName(e.target.value)}
        value={FirstName}
        />

      
        <label> LastName: </label>
        {emptyFields.includes("LastName") && (
          <div className="error1">*Please fill the field</div>
        )}
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setLastName(e.target.value)}
          value={LastName}
        />
  
    
        <label> phone: </label>
        {emptyFields.includes("phone") && (
          <div className="error1">*Please fill the field</div>
        )}
        <input
          type="text"
          placeholder="Enter Name of the Badge"
          onChange={(e) => setphone(e.target.value)}
          value={phone}
        />
  
        
        <label> Addresss: </label>
        {emptyFields.includes("Addresss") && (
            <div className="error1">*Please fill the field</div>
      )}
      <input
        type="text"
        placeholder="Enter the Addresss"
        onChange={(e) => setAddresss(e.target.value)}
        value={Addresss}
      />

      <button>SUBMIT</button>
      {error && <div className="error1">{error}</div>}
      </form1>

    


<form2 className="create2" >
<label> Date Of Birth : </label>
{emptyFields.includes("DOB") && (
  <div className="error2">*Please fill the field</div>
)}
<input className="input1"
  type="text"
  placeholder="Enter Troop Number"
  onChange={(e) => setDOB(e.target.value)}
  value={DOB}
  />


  <label> Badge: </label>
  {emptyFields.includes("Badge") && (
    <div className="error2">*Please fill the field</div>
  )}
  <input
    type="text"
    placeholder="Enter Badge"
    onChange={(e) => setBadge(e.target.value)}
    value={Badge}
  />


  <label> Scout Master's ID: </label>
  {emptyFields.includes("Scout Master's ID") && (
    <div className="error2">*Please fill the field</div>
  )}
  <input
    type="text"
    placeholder="Enter Scout Master's ID"
    onChange={(e) => setSMID(e.target.value)}
    value={SMID}
  />




</form2>
    </form>
    </div>
   
  );
};


export default Form;*/
