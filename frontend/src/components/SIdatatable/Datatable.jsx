import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { findexaminer, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
// import UpdateJobForm from "../updateJobForm/UpdateJobForm";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatable = () => {
   const [list, setList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
//   const [updateID, setUpdateID] = useState("");
  const { data, loading, error } = useFetch("/findexaminer");
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
          axios.delete(`/findexaminer/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`${id}`);
          //Swal.fire("Deleted!", "Your badge request has been deleted.", "success");
        }
      });
    } catch (err) {}
  };

//   const handleUpdate = async (id) => {
//     <UpdateJobForm></UpdateJobForm>;
//     console.log(id);
//   };

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchData = list.filter((item) =>
        item.Badge.toLowerCase().includes(getSearch)
      );
      setList(searchData);
    } else {
      setList(filterData);
    }
  };

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <div
  //             className="updateButton"
  //           //   onClick={() => {
  //           //     handleUpdate(params.row._id);
  //           //     navigate(`/housekeeping/updateJob?id=${params.row._id}`);
  //           //   }}
  //           >
  //             Update
  //           </div>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row._id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];


  
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Badge Examiner's Contacts", 20, 10);
    doc.autoTable({
      theme: "striped",
      head: [
        [
          "Badge",
          "Name",
          "Address",
          "Email",
          "Telephone"
        ],
      ],
      body: list.map((item) => [
        item.Badge,
        item.Name,
        item.Address,
        item.Email,
        item.Telephone
      ]),
    });
    doc.save("Badge Examiner's Contacts.pdf");
  };

  const actions = [
    {
      icon: () => (
        <button onClick={downloadPdf} className="export">
          Download Contact Details
        </button>
      ),
      tooltip: "Export Contact Details",
      isFreeAction: true,
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
      Badge Examiner's Contacts

      </div>
      <input
        type="text"
        value={query}
        className="search"
        onChange={(e) => handleSearch(e)}
        placeholder="Search by Badge Name"
      />
      <DataGrid
        className="datagrid"
        rows={list}
        columns={findexaminer.concat()}
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
export default Datatable;