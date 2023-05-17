import React from 'react'
import "./AddEvent.scss"
// import AddEventform from '../../components/addeventfm/AddEvent'
import AddEvents from '../../components/addeventfm/AddEventComp'
import Navbar from '../../components/navbar/Navbar'

const AddEvent= () =>{
    return(
        <div className='addevent'>
            <Navbar/>
            <div className='container'>
                <div className="form">
                    <AddEvents/>                    
                </div>
            </div>
        </div>
    )
}

export default AddEvent
