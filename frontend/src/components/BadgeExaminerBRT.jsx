import React from 'react'
import "./badgeExaminerBRT.scss";
import { DataGrid } from "@mui/x-data-grid";
import { requestColumns} from "../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";



const BadgeExaminerBRT = () => {
  const [list, setList] = useState([]);

  const { data, loading, error } = useFetch("./badgeRequest");
 

  useEffect(() => {
   setList(data);

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
          axios.delete(`/badgeRequest/${id}`);

          console.log(`${id}`);
          Swal.fire("Deleted!", "Badge Request has been deleted.", "success");
        }
      });
    } catch (err) {}
  };



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 450,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="passButton"
              type="button"
              ><Link style={{textDecoration:"none",color:"green"}}to={`/BadgeExaminerBIR/${params.row._id}`}>
              Pass</Link>
              
            </div>

            <div
              className="SchedulButton"     
              ><Link style={{textDecoration:"none",color:"purple"}}to={'/badgeExaminerTT'}>
              Schedule Time</Link>
              
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];



  return (
    <div className="datatable">
      <div className="datatableTitle">
        

      </div>

      <DataGrid
        className="datagrid"
        rows={list}
        columns={requestColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        getRowId={(row) => row._id}

      >
    </DataGrid></div>
  );
};
export default BadgeExaminerBRT;
