/*import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import NavbarScoutMaster from '../../components/NavbarScoutMaster'

function App(){
  const column = [
      {
          fname : "First Name",
          selector: row => row.first_name,
          sortable: true
      },
      {
          lname : "Last Name",
          selector: row => row.last_name
      },
      {
          MID : "MID",
          selector: row => row.MID
      },
      {
          TID : "TID",
          selector: row => row.TID
      },
  ];
  const data =[
    {
      id:1,
      fname: 'amal',
      lname:'silva',
      MID: 'k77',
      TID: 'h8'

    },
    {
      id:1,
      fname: 'Namal',
      lname:'silva',
      MID: 'd77',
      TID: 'w8'

    }
  ]
  const [records, setRecords] =useState(data);
  function handleFilter(event){
      const newData =records.filter(row => {

        return row.fname.toLowerCase().includes(event.target.value.toLowerCase())

      })
      setRecords(newData)
  }
  return(
    <div className='scoutmaster'>
    <div><NavbarScoutMaster/></div>
    <div  className='=table'>
      <div className='text-end'><input type="text" onChange={handleFilter}/></div>
      <DataTable
        columns={column}
        data={data}
        selectableRows
        fixedHeader
        pagination

        >

        </DataTable>
    </div>
    </div>
  )


}

export default App;*/






/*import React from 'react'
import NavbarScoutMaster from '../../components/NavbarScoutMaster'
//import { useState } from "react";
import "./ScoutMasterAS.scss";
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const Form = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phone, setphone] = useState("");
  const [Addresss, setAddresss] = useState("");
  const [DOB, setDOB] = useState("");
  const [Badge, setBadge] = useState("");
  const [SMID, setSMID] = useState("");
  const [err, seterr] = useState(null);
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
      seterr("");
      return;
    }

    const details = { FirstName, LastName, phone, Addresss, DOB, Badge, SMID };

    useEffect(()=>{
      fetch("http://localhost:5000/ScoutMaster/:id",{
          method: "GET",  
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data,"userData");
      });
  },[]);
  
  useEffect(()=>{
      const fetData = async () =>{
          axios.get ('http://localhost:5000/ScoutMaster/:id')
          .then(res =>{
              setRecords(res.data)
          setFilterRecords(res.data)
      })
          .catch(err => console.log(err));
          
      }
  
      fetData();
  }, [])
  
  const[records, setRecords] =useState([])
    const json = await response.json();
    // if (!response.ok) {
    //   setError(json.error);
    // }

    if (!response.ok) {
      if (response.status === 500) {
        seterr("Wrong Details");
    } else {
        seterr(json.err);
      }
    } else {

    
      setFirstName("");
      setLastName("");
      setphone("");
      setAddresss("");
      setDOB("");
      setBadge("");
      setSMID("");
      seterr   (null);
      setEmptyFields([]);
      console.log("New Badge Request", json);
    }
  };

  return (
    
    <div className='scoutmasterAP'>
        <div><NavbarScoutMaster/></div>
    
    
    <form className="create" onSubmit={handleSubmit}>
      
    
    <h3 >My profile </h3>
     
  
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




<button>SUBMIT</button>
      {err && <div className="error1">{err}</div>}

      
    </form>
    </div>
   
  );
};


export default Form;*/

// import React from 'react'
// import NavbarScoutMaster from '../../components/NavbarScoutMaster'
// import { useState } from "react";
// import "./ScoutMasterAS.scss";
// import Footer from '../../components/footer'


// const Form = () => {

//   const [first_name, setfirst_name] = useState("");
//   const [last_name, setlast_name] = useState("");
//   const [id, setid] = useState("");
//   const [date_of_birth, setdate_of_birth] = useState("");
//   const [user_name, setuser_name] = useState("");
//   const [password, setpassword] = useState("");
//   const [err, seterr] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const emptyFields = [];
//     if (!first_name) {
//       emptyFields.push("first_name");
//     }
//     if (!last_name) {
//       emptyFields.push("last_name");
//     }
//     if (!id) {
//         emptyFields.push("id");
//     }
//     if (!date_of_birth) {
//       emptyFields.push("date_of_birth");
//     }
//     if (!user_name) {
//       emptyFields.push("user_name");
//     }
//     if (!password) {
//       emptyFields.push("password");
//     }
    
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       seterr("");
//       return;
//     }

//     const details = { first_name, last_name, id, date_of_birth, user_name, password};

//     const response = await fetch("http://localhost:5000/scout/", {
//       method: "POST",
//       body: JSON.stringify(details),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // useEffect(()=>{
//   //     axios.get(`http://localhost:5000/scout/${id}`)
//   //     .then(res =>{
//   //         setValues({...values, first_name:res.data.first_name, last_name:res.data.last_name, registration_number: res.data.registration_number, password: res.data.password})
//   //     })
//   //     .catch(err => console.log(err))  

//   // }, [])
//     const json = await response.json();
//     // if (!response.ok) {
//     //   setError(json.error);
//     // }
//     if (!response.ok) {
//       if (response.status === 500) {
//         seterr("Wrong Details");
//         //seterr(json.error);
//     } else {
//         seterr(json.err);
//       }
//     } else {

    
//       setfirst_name("");
//       setlast_name("");
//       setid("");
//       setdate_of_birth("");
//       setuser_name("");
//       setpassword("");
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
//       {emptyFields.includes("first_name") && (
//         <div className="error1">*Please fill the field</div>
//       )}
//       <input className="input1"
//         type="text"
//         placeholder="Enter the First name"
//         onChange={(e) => setfirst_name(e.target.value)}
//         value={first_name}
//         />

      
//         <label> Last Name: </label>
//         {emptyFields.includes("last_name") && (
//           <div className="error1">*Please fill the field</div>
//         )}
//         <input
//           type="text"
//           placeholder="Enter the Last Name"
//           onChange={(e) => setlast_name(e.target.value)}
//           value={last_name}
//         />
  
    
//         <label> Scout ID: </label>
//         {emptyFields.includes("id") && (
//           <div className="error1">*Please fill the field</div>
//         )}
//         <input
//           type="text"
//           placeholder="Enter id"
//           onChange={(e) => setid(e.target.value)}
//           value={id}
//         />
  
        
//         <label> Date of Birth: </label>
//         {emptyFields.includes("date_of_birth") && (
//             <div className="error1">*Incorrect Date</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter the date_of_birth"
//         onChange={(e) => setdate_of_birth(e.target.value)}

//         value={date_of_birth}
//       />

// <label> User Name : </label>
// {emptyFields.includes("user_name") && (
//   <div className="error2">*Please fill the field</div>
// )}
// <input className="input1"
//   type="text"
//   placeholder="Enter the User Name"
//   onChange={(e) => setuser_name(e.target.value)}
//   value={user_name}
//   />


//   <label> password : </label>
//   {emptyFields.includes("password") && (
//     <div className="error2">*Please fill the field</div>
//   )}
//   <input
//     type="text"
//     placeholder="Enter the password"
//     onChange={(e) => setpassword(e.target.value)}
//     value={password}
//   />
  



      
//     </form>
//     <div><Footer/></div>
//     </div>
   
//   );
// };


// export default Form;

// import { useEffect,useState } from "react";
// import ScoutMasterMP from '../components/ScoutMasterMP'

// const SctMasterMP =() => {
//   const[workouts,setWorkouts] = useState(null)

//   useEffect(()=>{
//     const fetchWorkouts = async () => {
//       const response = await fetch ('http://localhost:5000/ScoutMaster/')
//       const json = await response.json()

//       if (response.ok){
//         setWorkouts(json)

//       }
//     }

//     fetchWorkouts()
//   }, [])

//   return(
//     <div classname ="home">
//       <div className="workouts">
//         {workouts && workouts.map((workout) =>(
//           <ScoutMasterMP key={workout._id} workout={workout}/>
//         ))}
//       </div>

//     </div>
//   )
// }

// export default SctMasterMP

import React from 'react'
import NavbarScoutMaster from '../../components/NavbarScoutMaster'
import ScoutMasterMP from '../../components/ScoutMasterMP'
import Footer from '../../components/footer'

const ScoutList = () => {
  return (
    <div className='ScoutList'>
        <NavbarScoutMaster/>
        <ScoutMasterMP/>
        <Footer/>
      
    </div>
  )
}

export default ScoutList