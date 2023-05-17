import React from 'react'
// import "./AddEvent.scss"
// import AddEventform from '../../components/addeventfm/AddEvent'
import Updateeventcomp from '../../components/updateEvent/UpdateEventComp'
import Navbar from '../../components/navbar/Navbar'

const UpdateEvent= () =>{
    return(
        <div className='updatevent'>
            <Navbar/>
            <div className='container'>
                <div className="form">
                    <Updateeventcomp/>                    
                </div>
            </div>
        </div>
    )
}

export default UpdateEvent