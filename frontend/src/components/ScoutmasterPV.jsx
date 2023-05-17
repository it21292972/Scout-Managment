import "./ScoutmasterPV.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarScoutMaster from './NavbarScoutMaster'
import Footer from './footer'


import jsPDF from "jspdf";
import "jspdf-autotable";

const ScoutmasterPV = () => {
   const [list, setList] = useState([]);
 const [filterData, setFilterData] = useState([]);
 const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch("/scout");
 // const navigate = useNavigate();

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
          axios.delete(`http://localhost:5000/scout/delete/${id}`);
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
              to ={`/updatebr/${params.row._id}`}
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
    

          "Registration No",
          "First Name",
          "Date of Birth",
          "Troop Name",
          


        ],
      ],
      body: list.map((item) => [
        item.registration_number,
        item.first_name,
        item.date_of_birth,
        item.troop_name,

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

export default ScoutmasterPV;
