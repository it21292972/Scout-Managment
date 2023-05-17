import "./badgeRequstTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { badgeColumns, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
// import UpdateJobForm from "../updateJobForm/UpdateJobForm";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CSlogo from "../../image/CSlogo.png";

const BadgeRequestTable = () => {
   const [list, setList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
//   const [updateID, setUpdateID] = useState("");
  const { data, loading, error } = useFetch("/Badgerequest");
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
          axios.delete(`/Badgerequest/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`${id}`);
          Swal.fire("Deleted!", "Your badge request has been deleted.", "success");
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
        item.badge.toLowerCase().includes(getSearch)
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
            {/* <div
              className="updateButton"
            //   onClick={() => {
            //     handleUpdate(params.row._id);
            //     navigate(`/housekeeping/updateJob?id=${params.row._id}`);
            //   }}
            >
             <Link to="/UpdateRequest">Update</Link>
            </div> */}
            <Link style = {{textDecoration:"none"}}
            className="updateButton"
            type="button"
            to = {`/UpdateRequest/${params.row._id}`}>Update</Link>


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

  const downloadPdf = () => {
    const doc = new jsPDF();
    const text="Badge Requests";
    const textWidth = doc.getTextDimensions(text).w;
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    doc.text(text, x, 50);
    const addressLines = [
      "No. 65/7",
      "Sir Chittampalam A Gardiner Mawatha",
      "Colombo 02, Sri Lanka.",
      "+94 77 758 0646",
      "info@colomboscouts.lk"

    ];
    const addressX = doc.internal.pageSize.getWidth() - doc.getTextWidth(addressLines[0]) - 50;
    let addressY = 15;
    doc.setFontSize(10);
    addressLines.forEach(line => {
      doc.text(line, addressX, addressY);
      addressY += 4.5;
    });
    const CSlogo = require('../../image/CSlogo.png')
    doc.addImage(CSlogo, 'PNG', 10,10,50,25);
    const fontSize = 20;
      doc.setFontSize(fontSize);
    doc.autoTable({
      startY:60,
      theme: "striped",
      headStyles: { fillColor: [92, 30, 154] },
        alternateRowStyles: { fillColor: [231, 215, 252] },
        tableLineColor: [92, 30, 154],
        tableLineWidth: 0.1,

      head: [
        [
          "Section",
          "Name",
          "Badge",
          "Badge Examiner's Name",
          "Troop Name",
          "Reg No",
          "Scout Masters ID",
          "Badge Examiner ID"
        ],
      ],
      body: list.map((item) => [
        item.section,
        item.name,
        item.badge,
        item.BEName,
        item.TRNumber,
        item.REGNumber,
        item.smID,
        item.BEid
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
    <div className="datatable">
      <div className="datatableTitle">
        Badge Requests

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
        columns={badgeColumns.concat(actionColumn)}
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
export default BadgeRequestTable;