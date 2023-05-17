import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import DataTable from 'react-data-table-component'

const customStyles = {

    headRow :{
        style:{
            backgroundcolor: 'purple',
            color: "white"
        },
    },

    headCells:{
        style:{
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
        },

    },

    headCells: {
        style: {
            fontSize: '16px',
           
        },
    },
};

function App(){
    const column = [
        {
            name : "First Name",
            selector: row => row.first_name
        },
        {
            name : "Last Name",
            selector: row => row.name
        },
        {
            name : "MID"
        },
        {
            name : "TID"
        },
    ]

    useEffect(()=>{
        const fetData = async () =>{
            axios.get ('https://cloud.mongodb.com/v2/640831d223702e38ed4afd74#/metrics/replicaSet/6408329dd96a3649ee0c7728/explorer/scout/scoutmasters/find')
            .then(res =>setRecords(res.data))
            .catch(res =>console.log(err))
        }

        fetData();
    }, [])

    const[records, setRecords] =useState([])
    return(
        <div className='table'>
            <DataTable>
                columns ={column}
                data ={records}
                customStyles={customStyles}
            </DataTable>

        </div>
    )

}