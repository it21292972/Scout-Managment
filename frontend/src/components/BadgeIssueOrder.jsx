import React, { useEffect } from "react";
import { useState } from "react";
import "./badgeIssueOrder.scss";
import Swal from "sweetalert2";
import { useNavigate , useParams } from "react-router-dom";
import axios from "axios";

const BadgeIssueOrder = () => {
  const {id}=useParams();
  // const [IssueId, setIssueId] = useState("");
  // const [scoutId, setScoutId] = useState("");
  // const [scoutName, setScoutName] = useState("");
  // const [badgeName, setBadgeName] = useState("");
  // const [remark, setRemark] = useState("");
  // const [passedDate, setPassedDate] = useState("");
  const[values, setValues] = useState({
    IssueId:"",
    scoutId:"",
    scoutName:"",
    badgeName:"",
    remark:"", 
    passedDate:"",

});
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  
  useEffect(()=>{
    axios
    .get(`/badgeRequest/${id}`)
    .then((res)=>{
        setValues({
            ...values,
            //IssueId:res.data.IssueId,
            scoutId:res.data.scoutId,
            scoutName:res.data.scoutName,
            badgeName:res.data.badgeName,
            // remark:res.data.remark,
            // passedDate:res.data.passedDate,

        });
    })
    .catch((err)=> console.log(err));
},[])

  const handleSubmit = async (e) => {

    e.preventDefault();

    const emptyFields = [];
    if (!values.IssueId) { 
      emptyFields.push("IssueId");
    }
    if (!values.scoutId) {
      emptyFields.push("scoutId");
    }
    if (!values.scoutName) {
      emptyFields.push("scoutName");
    }
    if (!values.badgeName) {
      emptyFields.push("badgeName");
    }
    if (!values.remark) {
      emptyFields.push("remark");
    }
    if (!values.passedDate) {
      emptyFields.push("passedDate");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      return;
    }

    axios
    .post(`/badgeIssueOrder`,values)
    .then((res)=>{
        console.log(res);
        Swal.fire("Done!, Order Created successfully")
        navigate("/badgeExaminerRB")
    })
    .catch((err) => console.log(err))
  }
  //   const order = { values };

  //   const response = await fetch("/badgeIssueOrder", {
  //     method: "POST",
  //     body: JSON.stringify(order),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
    
  //   const json = await response.json();

  //   if (!response.ok) {
  //     if (response.status === 500) {
  //       Swal.fire("Error!", "This  ID is already exist!", "error");
  //     } else {
  //       setError(json.error);
  //     }
  //   }
  //   if (response.ok) {
  //     setValues({
  //       IssueId: "",
  //       scoutId: "",
  //       scoutName: "",
  //       badgeName: "",
  //       remark: "",
  //       passedDate: "",
  //     });
  //     console.log("new order  added", json);
  //     Swal.fire("Done!", "Create Badge Order Successfully!", "success");
  //   }
  // };

  
    const navigate = useNavigate();



  return (
    <form className="addIssue" onSubmit={handleSubmit}>
      <label>Issue Id :</label>
      <input
        type="text"
        onChange={(e) => setValues({...values, IssueId: e.target.value })}
        value={values.IssueId}
      />
      {emptyFields.includes("IssueId") && (
        <div className="error">*Please enter Issue ID</div>
      )}

      <label>Scout ID :</label>
      <input
        type="text"
        onChange={(e) => setValues({...values, scoutId: e.target.value })}
        value={values.scoutId}
      />
      {emptyFields.includes("scoutId") && (
        <div className="error">*Please enter Scout ID</div>
      )}

      <label>Scout Name :</label>
      <input
        type="text"
        onChange={(e) => setValues({...values, scoutName: e.target.value })}
        value={values.scoutName}
      />
      {emptyFields.includes("scoutName") && (
        <div className="error">*Please enter Scout Name</div>
      )}

    <label>Badge Name :</label>
      <input
        type="text"
        onChange={(e) => setValues({...values, badgeName: e.target.value})}
        value={values.badgeName}
      />
      {emptyFields.includes("badgeName") && (
        <div className="error">*Please enter Badge Name</div>
      )}

      <label>Passed Date :</label>
      <input
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setValues({...values, passedDate: e.target.value})}
        value={values.passedDate}
      />
      {emptyFields.includes("passedDate") && (
        <div className="error">*Please enter Date</div>
      )}



      <label>Remarks :</label>
      <input
        type="text"
        className="remark"
        onChange={(e) => setValues({...values, remark: e.target.value})}
        value={values.remark}
      />
      {emptyFields.includes("remark") && (
        <div className="error">*Please enter Remark</div>
      )}

      <button>Make Issue Order</button>
      <p>{error && <p className="error">{error}</p>}</p>
    </form>
  );
};

export default BadgeIssueOrder;

// import { useState, useEffect } from "react";
// import "./badgeIssueOrder.scss";
// import Swal from "sweetalert2";

// const BadgeIssueOrder = () => {
//   const [IssueId, setIssueId] = useState("");
//   const [scoutId, setScoutId] = useState("");
//   const [scoutName, setScoutName] = useState("");
//   const [badgeName, setBadgeName] = useState("");
//   const [remark, setRemark] = useState("");
//   const [passedDate, setPassedDate] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);
//   const [scoutData, setScoutData] = useState(null);

//   // Retrieve data from the API endpoint
//   useEffect(() => {
//     const scoutdata = async () => {
//       try {
//         const response = await fetch("/badgeRequest");
//         const data = await response.json();
//         setScoutData(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     scoutdata();
//   }, []);

//   // Pre-populate the input fields with the retrieved data
//   useEffect(() => {
//     if (scoutData) {
//       setScoutId(scoutData.scoutId);
//       setScoutName(scoutData.scoutName);
//       setBadgeName(scoutData.badgeName);
//     }
//   }, [scoutData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emptyFields = [];
//     if (!IssueId) {
//       emptyFields.push("IssueId");
//     }
//     if (!scoutId) {
//       emptyFields.push("scoutId");
//     }
//     if (!scoutName) {
//       emptyFields.push("scoutName");
//     }
//     if (!badgeName) {
//       emptyFields.push("badgeName");
//     }
//     if (!remark) {
//       emptyFields.push("remark");
//     }
//     if (!passedDate) {
//       emptyFields.push("passedDate");
//     }
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       return;
//     }

//     const order = { IssueId, scoutId, scoutName, badgeName, remark, passedDate };

//     const response = await fetch("/badgeIssueOrder", {
//       method: "POST",
//       body: JSON.stringify(order),
//       headers: {
//         "content-type": "application/json",
//       },
//     });

//     const json = await response.json();

//     if (!response.ok) {
//       if (response.status === 500) {
//         Swal.fire("Error!", "This  ID is already exist!", "error");
//       } else {
//         setError(json.error);
//       }
//     }
//     if (response.ok) {
//       setIssueId("");
//       setScoutId("");
//       setScoutName("");
//       setBadgeName("");
//       setRemark("");
//       setPassedDate(null);
//       console.log("new order  added", json);
//       Swal.fire("Done!", "Create Badge Order Successfully!", "success");
//     }
//   };
//   return (
//     <form className="addIssue" onSubmit={handleSubmit}>
//       <label>IssueId :</label>
//      <input
//          type="text"
//          onChange={(e) => setIssueId(e.target.value)}
//          value={IssueId}
//        />
//        {emptyFields.includes("IssueId") && (
//         <div className="error">*Please enter Job Title</div>
//       )}

//       <label>Scout ID :</label>
//       <input
//         type="text"
//         onChange={(e) => setScoutId(e.target.value)}
//         value={scoutId}
//       />
//       {emptyFields.includes("scoutId") && (
//         <div className="error">*Please enter Scout ID</div>
//       )}

//       <label>Scout Name :</label>
//       <input
//         type="text"
//         onChange={(e) => setScoutName(e.target.value)}
//         value={scoutName}
//       />
//       {emptyFields.includes("scoutName") && (
//         <div className="error">*Please enter Scout Name</div>
//       )}

//     <label>Badge Name :</label>
//       <input
//         type="text"
//         onChange={(e) => setBadgeName(e.target.value)}
//         value={badgeName}
//       />
//       {emptyFields.includes("badgeName") && (
//         <div className="error">*Please enter Badge Name</div>
//       )}

//       <label>Passed Date :</label>
//       <input
//         type="date"
//         min={new Date().toISOString().slice(0, 10)}
//         onChange={(e) => setPassedDate(e.target.value)}
//         value={passedDate}
//       />
//       {emptyFields.includes("passedDate") && (
//         <div className="error">*Please enter Date</div>
//       )}



//       <label>Remarks :</label>
//       <input
//         type="text"
//         className="remark"
//         onChange={(e) => setRemark(e.target.value)}
//         value={remark}
//       />
//       {emptyFields.includes("remark") && (
//         <div className="error">*Please enter Remark</div>
//       )}

//       <button>Make Issue Order</button>
//       <p>{error && <p className="error">{error}</p>}</p>
//     </form>
//   );
// };

// export default BadgeIssueOrder;


// import {useState} from 'react'
// import './badgeIssueOrder.scss'
// import {FormGroup,FormControl, InputLabel, Input, Typography, Button} from "@mui/material";

// import {badgeIssueOrder } from '../service/api'

// const defaultValue = {
//     IssueId:"",
//     scoutId:"",
//     scoutName:"",
//     badgeName:"",
//     remark:"",
//     passedDate:""
// }

 

// const BadgeIssueOrder = () => {
 
//     const [order, setOrder] =  useState({defaultValue});
//     const {IssueId, scoutId, scoutName, badgeName, remark, passedDate}=order;
//     const onValueChange = (e)=>{
//         console.log(e.target.name, e.target.value)
//         setOrder({...order,[e.target.name]:e.target.value});
//         console.log(order)
//     }

//     const createOrder = async() => {
//         await badgeIssueOrder(order);
//     }

//   return (
//     <div className='BadgeIssueOrderForm'>
//         <Typography variant='h4'>Badge Issuing Order</Typography>
//         <FormGroup>
//             <FormControl className='field'>
//                 <InputLabel >Issue ID</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name="IssueId" value={IssueId} />
//             </FormControl>
//             <FormControl className='field'>
//                 <InputLabel>Scout ID</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name="scoutId" value={scoutId}/>
//             </FormControl>
//             <FormControl className='field'>
//                 <InputLabel>Scout Name</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name="scoutName" value={scoutName}/>
//             </FormControl>
//             <FormControl className='field'>
//                 <InputLabel >Badge Name</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name="badgeName" value={badgeName}/>
//             </FormControl>
//             <FormControl className='field'>
//                 <InputLabel>Remark</InputLabel>
//                 <Input onChange={(e)=>onValueChange(e)} name="Remark" value={remark}/>
//             </FormControl>
//             <FormControl className='field'>
//             <input className='fieldDate' type="date" onChange={(e)=>onValueChange(e)} name="passedDate" value={passedDate}/>
//             </FormControl>
//             <FormControl>
//                 <Button variant='contained' className='orderBtn' onClick={()=>createOrder()}>Make Badge Issuing Order</Button>
//             </FormControl>

//         </FormGroup>
      
//     </div>
//   )
// }

// export default BadgeIssueOrder
