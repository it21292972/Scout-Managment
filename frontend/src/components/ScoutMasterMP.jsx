// const SctMasterMP =({workout}) =>{
//     return(
//         <div className="ScoutMaster-details">
//             <h4>{workout.title}</h4>
//             <p><strong>Load (kg)</strong>{workout.load}</p>
//             <p>{workout.createdAt}</p>
//         </div>
//     )

// }
// export default SctMasterMP

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function ScoutMasterMP(){

    const {id}=useParams();
    const [values, setValues] = useState({
        id: id,
        first_name: '',
        registration_number: '',
        last_name: '',
        password:''
        
    })
    useEffect(()=>{
        axios.get(`http://localhost:5000/scout/${id}`)
        .then(res =>{
            setValues({...values, first_name:res.data.first_name, last_name:res.data.last_name, phone: res.data.phone, address: res.data.address, dob:res.data.dob, badge:res.data.badge})
        })
        .catch(err => console.log(err))  

    }, [])

    const navigate = useNavigate()

    // const handleSubmit =(e) =>{
    //     e.preventDefault();
    //     axios.put(`http://localhost:5000/scout/update/${id}`,values)
    //     .then(res =>{
    //         navigate('/ScoutList');
            
    //     })
    //     .catch(err => console.log(err))
    // }

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form >
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
                    <button className='btn btn-info'>Edit</button>
                    
                   
                </form>
            </div>
        </div>
    )
}

export default ScoutMasterMP