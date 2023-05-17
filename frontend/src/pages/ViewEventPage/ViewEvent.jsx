import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import EventTable from '../../components/eventTable/EventTable'

const ViewEvent = () =>{
    return(
        <div className='viewevent'>
            <Navbar/>
            <div className='container'>
            <EventTable/>
            </div>
        </div>
    )
}

export default ViewEvent