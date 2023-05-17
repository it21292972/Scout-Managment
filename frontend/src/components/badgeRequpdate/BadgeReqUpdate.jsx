import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2"
import "./BadgeReqUpdate.scss"


function BadgeReqUpdate(){

    const {id}=useParams();
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
        
        section: "",
        name: "",
        badge:"" ,
        BEName: "",
        TRNumber:"",
        REGNumber:"",
        smID:"",
        BEid:"",
    });
    useEffect(()=>{
        axios.get(`/Badgerequest/${id}`)  ///postman get
        .then(res =>{
            setValues({...values, section:res.data.section, name:res.data.name, badge: res.data.badge, BEName: res.data.BEName, TRNumber: res.data.TRNumber, REGNumber: res.data.REGNumber, smID: res.data.smID, BEid: res.data.BEid})
        })
        .catch(err => console.log(err))  

    }, [])



    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.put(`/Badgerequest/${id}`,values)   ///update
        .then(res =>{
           console.log(res);
           Swal.fire("Done" , "Badge Request Updated Successfully!" , "Success");
           navigate("/badgeRequestTable")
            
        })
        .catch(err => console.log(err))
    }

    return(

 <form className="create" onSubmit={handleSubmit}>

      <h4 >Update Badge Request </h4>


      <label> Section : </label>
      {/* {emptyFields.includes("Section") && (
        <div className="error1">*Please fill the field</div>
      )} */}
      <select className="dropdown" value={values.section}   onChange={(e) => setValues({...values, section: e.target.value})} required >
       <option value="">--Please select a Section--</option>
       <option value="Cub">Cub</option>
       <option value="Junior">Junior</option>
       <option value="Senior">Senior</option>
       </select>
        
        
      
      <label> Name: </label>
      {/* {emptyFields.includes("Scout Name") && (
        <div className="error1">*Please fill the field</div>
      )} */}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setValues({...values, name: e.target.value})}
        value={values.name}
        required
      />


      <label> Badge: </label>
      {/* {emptyFields.includes("Badge") && (
        <div className="error1">*Please fill the field</div>
      )} */}
      <input
        type="text"
        placeholder="Enter Name of the Badge"
        onChange={(e) => setValues({...values, badge: e.target.value})}
        value={values.badge}
        required
      />


      <label> Badge Examiner's Name: </label>
      {/* {emptyFields.includes("Badge Examire's Name") && (
        <div className="error1">*Please fill the field</div>
      )} */}
      <input
        type="text"
        placeholder="Enter the Badge Examiner's Name"
        onChange={(e) => setValues({...values, BEName: e.target.value})}
        value={values.BEName}
        required
      />

      <label> Troop Number : </label>
      {/* {emptyFields.includes("Troop Number") && (
        <div className="error2">*Please fill the field</div>
      )} */}
      <input className="input1"
        type="text"
        placeholder="Enter Troop Number"
        onChange={(e) => setValues({...values, TRNumber: e.target.value})}
        value={values.TRNumber}
        required
      />


      <label> Registration Number: </label>
      {/* {emptyFields.includes("Registration Number") && (
        <div className="error2">*Please fill the field</div>
      )} */}
      <input
        type="text"
        placeholder="Enter Registration Number"
        onChange={(e) => setValues({...values, REGNumber: e.target.value})}
        value={values.REGNumber}
        required
      />


      <label> Scout Master's ID: </label>
      {/* {emptyFields.includes("Scout Master's ID") && (
        <div className="error2">*Please fill the field</div>
      )} */}
      <input
        type="text"
        placeholder="Enter Scout Master's ID"
        onChange={(e) => setValues({...values, smID: e.target.value})}
        value={values.smID}
        required
      />

      <label> Badge Examiner's ID: </label>
      {/* {emptyFields.includes("Badge Examiner's ID") && (
        <div className="error2">*Please fill the field</div>
      )} */}
      <input
        type="text"
        placeholder="Enter the Badge Examiner's Name"
        onChange={(e) => setValues({...values, BEid: e.target.value})}
        value={values.BEid}
      />
      <button>UPDATE</button>
      {error && <div className="error1">{error}</div>}



      
    </form>
        // <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        //     <div className='w-50 border bg-secondary text-white p-5'>
        //         <form onSubmit={handleSubmit}>
        //             <div>
        //                 <label htmlFor ="name">Section:</label>
        //                 <input type="text" name='section' className='form=control' placeholder='Enter Section' value={values.section} onChange={e => setValues({...values,section: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor="email">Name:</label>
        //                 <input type='text' name='name' className='form-control' placeholder='Enter Name' value={values.name} onChange={e => setValues({...values,name: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor ="id">Badge:</label>
        //                 <input type="text" name='badge' className='form=control' placeholder='Enter Badge' value={values.badge} onChange={e => setValues({...values,badge: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor ="id">Troop Number:</label>
        //                 <input type="text" name='TRNumber' className='form=control' placeholder='Enter Troop Number' value={values.TRNumber} onChange={e => setValues({...values,TRNumber: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor ="id">Badge Examiners Name:</label>
        //                 <input type="text" name='BEName' className='form=control' placeholder='Enter Badge Examiners Name' value={values.BEName} onChange={e => setValues({...values,BEName: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor ="id">Registration Number:</label>
        //                 <input type="text" name='REGNumber' className='form=control' placeholder='Enter Registration Number' value={values.REGNumber} onChange={e => setValues({...values,REGNumber: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor ="id">Scout Masters ID:</label>
        //                 <input type="text" name='smID' className='form=control' placeholder='Enter Scout Masters ID' value={values.smID} onChange={e => setValues({...values,smID: e.target.value})}/>
        //             </div>
        //             <div>
        //                 <label htmlFor ="id">Badge Examiners ID:</label>
        //                 <input type="text" name='BEid' className='form=control' placeholder='Enter Badge Examiners ID' value={values.BEid} onChange={e => setValues({...values,BEid: e.target.value})}/>
        //             </div>
        //             <button className='btn btn-info'>Update</button>
        //         </form>
        //     </div>
        // </div>
    )
}

export default BadgeReqUpdate










