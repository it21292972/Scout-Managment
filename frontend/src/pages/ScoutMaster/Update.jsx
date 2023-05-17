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
        axios.get(`http://localhost:5000/scout/${id}`)
        .then(res =>{
            setValues({...values, first_name:res.data.first_name, last_name:res.data.last_name, registration_number: res.data.registration_number, password: res.data.password})
        })
        .catch(err => console.log(err))  

    }, [])

    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/scout/update/${id}`,values)
        .then(res =>{
            navigate('/ScoutList');
            
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
                        <label htmlFor ="id">Registration Number    :</label>
                        <input type="text" name='laste_name' className='form=control' placeholder='Enter ID' value={values.registration_number} onChange={e => setValues({...values,registration_number: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor ="id">Password    :</label>
                        <input type="text" name='password' className='form=control' placeholder='Enter ID' value={values.password} onChange={e => setValues({...values,password: e.target.value})}/>
                    </div>
                    
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update