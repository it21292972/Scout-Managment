import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function UpdateBR(){

    const[selects,setSelects]=useState();
    const {id}=useParams();
    const [values, setValues] = useState({
        id: id,
        approve:''
        
    })
    useEffect(()=>{
        axios.get(`http://localhost:5000/badgereq/${id}`)
        .then(res =>{
            setValues({...values, approve:res.data.approve})
        })
        .catch(err => console.log(err))  

    }, [])

    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/badgereq/update/${id}`,values)
        .then(res =>{
            navigate('/SMBadgeReq');
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
        <div>
            <h1>TEST</h1>
            <select value={selects} onChange={e =>setSelects(e.target.value)}>
            <label htmlFor ="name">Approve:</label>
                <option></option>
                <option>True</option>
                <option>False</option>
                
            </select>
        </div>
        <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBR