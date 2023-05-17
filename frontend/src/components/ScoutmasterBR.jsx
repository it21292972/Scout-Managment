/*import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import DataTable, {defaultThemes} from 'react-data-table-component'
import './ScoutMasterBR.scss'
import NavbarScoutMaster from '../../components/NavbarScoutMaster'
import Footer from '../../components/footer'
//import {mongoose} from 'mongoose'
//import ScoutMaster from './ScoutMaster'
//require("../../../../backend/models/ScoutMaster");



const customStyles = {

  headRow :{
      style:{
          backgroundcolor: 'purple',
          color: "Black"
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
        selector: row => row.first_name,
        sortable: true
    },
    {
        name : "Last Name",
        selector: row => row.last_name,
        sortable: true
    },
    {
        name : "mid",
        selector: row => row.MID,
        sortable: true
    },
    {
        name : "tid",
        selector: row => row.TID,
        sortable: true
    }
]

useEffect(()=>{
    fetch("http://localhost:5000/ScoutMaster",{
        method: "GET",  
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data,"userData");
    });
},[]);

useEffect(()=>{
    const fetData = async () =>{
        axios.get ('http://localhost:5000/ScoutMaster')
        .then(res =>{
            setRecords(res.data)
        setFilterRecords(res.data)
    })
        .catch(err => console.log(err));
        
    }

    fetData();
}, [])

const[records, setRecords] =useState([])
const[filterRecords, setFilterRecords] = useState([])


const handleFilter = (event) =>{
  const newData = filterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
  setRecords(newData);

}


return(
  
  <div className='scoutmaster'>
        <div><NavbarScoutMaster/></div>
       

        <h1 style={{alignContent: 'center'}}>Scout List</h1>
   
    <div style={{padding: "50px 10%", background: "purple"}}>
      <div style={{display: 'flax', justifyContent: "right"}}> 
        <input type="text" placeholder='Serach...' onChange={handleFilter} style={{padding:'6px 10px'}}/>
        </div>
      
        <DataTable
            columns ={column}
            data ={records}
            customStyles={customStyles}
            pagination
            selectableRows
        ></DataTable>
    </div>
    <div><Footer/></div>
    </div>
)

}

export default App; */




/*import React from 'react'
import "./ScoutMasterBR.scss"
import NavbarScoutMaster from '../../components/NavbarScoutMaster'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(ScoutName, Approve, Send) {
  return { ScoutName, Approve, Send };
}

const rows = [
  createData('Saman',"Approve", 'Send' ),
  createData('Sunil', 'Approve', 'Send'),
  
];

export default function ScoutmasterBR() {
  return (
    
    <div><NavbarScoutMaster/>

<div className='space' >
<h1 align="center">Badge Request</h1></div>


    <TableContainer className='Table'>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Scout Name</StyledTableCell>
            <StyledTableCell align="center">Approve</StyledTableCell>
            <StyledTableCell align="center">Send</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ScoutName}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.ScoutName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Approve}</StyledTableCell>
              <StyledTableCell align="center">{row.Send}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
  
}*/




import "./ScoutMasterBR.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatableBR";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

import jsPDF from "jspdf";
import "jspdf-autotable";

const SMBadgeReq = () => {
   const [list, setList] = useState([]);
 const [filterData, setFilterData] = useState([]);
 const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch("/SPbadgereq");
  const navigate = useNavigate();

  useEffect(() => {
    setList(data);
   setFilterData(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#10A19D",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/badgereq/delete/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`${id}`);
          Swal.fire("Deleted!", "Your badge request has been deleted.", "success");
        }
      });
    } catch (err) {}
  };
 

  // const handleUpdate = async (id) => {
  //   <UpdateJobForm></UpdateJobForm>;
  //   console.log(id);
  // };
  

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchData = list.filter((item) =>
        item.id.toLowerCase().includes(getSearch)
      );
      setList(searchData);
    } else {
      setList(filterData);
    }
  };
  const handleSubmit =(e) =>{
    axios.post(`http://localhost:5000/notificationBR/`)
    .then(res =>{
        navigate('/SMBadgeReq');
        
    })
    .catch(err => console.log(err))
}

  const sendColumn = [
    {
      field: "send",
      headerName: "send",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellSend">
            <button
              className="updateButton" type ="button"
              onClick={() => handleSubmit(params.row._id)}
            >
              Send
            </button>
            
          </div>
        );
      },
    },
  ];
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              className="updateButton" type ="button"
              to ={`/updateBR/${params.row._id}`}
            >
              Update
            </Link>
            <button
              className="deleteButton" type ='button'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Scout List", 20, 10);
    doc.autoTable({
      theme: "striped",
      head: [
        [
    
          "Name",
          "Approve",
          "Send",
          


        ],
      ],
      body: list.map((item) => [
        item.Name,
        item.send,
        item.approne,
        

      ]),
    });
    doc.save("Badge Requests.pdf");
  };

  const actions = [
    {
      icon: () => (
        <button onClick={downloadPdf} className="export">
          Export as PDF
        </button>
      ),
      tooltip: "Export to Pdf",
      isFreeAction: true,
    },
  ];

  return (
    <div className="ScoutmastetSL">
      <div className="datatableTitle">
        Badge Requests

      </div>
      <input
        type="text"
        value={query}
        className="search"
        onChange={(e) => handleSearch(e)}
        placeholder="Search by Scout ID"
      />
      <DataGrid
        className="datagrid"
        rows={list}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        getRowId={(row) => row._id}
        components={{
          Toolbar: () => (
            <div>
             {actions.map((action, index) => (
                <action.icon key={index} onClick={action.onClick} />
              ))}
            </div>
            
            
          ),
        }}
      />
    </div>
  );
};
export default SMBadgeReq;
      
   


