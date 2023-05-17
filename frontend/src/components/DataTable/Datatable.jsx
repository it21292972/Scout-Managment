
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { badgeexColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Datatable = () => {
  const [list, setList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");
  
  const { data, loading, error } = useFetch("/addbe");
  //const navigate = useNavigate();

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
          axios.delete(`/addbe/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`/addbe/${id}`);
          Swal.fire("Deleted!", "Badge examiner has been deleted.", "success");
        }
      });
    } catch (err) { }
  };



const handleSearch = (event) => {
  const getSearch = event.target.value;
  setQuery(getSearch);

  if (getSearch.length > 0) {
    const searchData = list.filter((item) =>
      item.userName.toLowerCase().includes(getSearch)
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
          //  className="updateButton"
          // onClick={() => {
          //   handleUpdate(params.row._id);
          //   navigate(`/housekeeping/updateJob?id=${params.row._id}`);
          // }}
          >
            Update
          </div> */}
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

// const downloadPdf = () => {
//   const doc = new jsPDF();
//   doc.text("Badge Examiners", 20, 10);
//   doc.autoTable({
//     theme: "grid",
//     head: [
//       [
//         "Warrent ID",
//         "First Name",
//         "Last Name",
//         "User Name",
//         "Address",
//         "Contact",
//       ],
//     ],
//     body: list.map((item) => [
//       item.warratID,
//       item.firstName,
//       item.lastName,
//       item.userName,
//       item.address,
//       item.contact,
//     ]),
//   });
//   doc.save("Badge Examiners.pdf");
// };
const downloadPdf = () => {
  const doc = new jsPDF();
  const text="Badge Examiners";
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
  doc.autoTable({
    startY:60,
    theme: "striped",
    head: [
      [
        "Warrent ID",
        "First Name",
        "Last Name",
        "User Name",
        "Address",
        "Contact",
      ],
    ],
    body: list.map((item) => [
      item.warratID,
      item.firstName,
      item.lastName,
      item.userName,
      item.address,
      item.contact,
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
  <div className="Datatable">
    <div className="datatableTitle">
      Active Badge Examiners
      {/* <Link to="/housekeeping/assignJob" className="link">
          Assign New Job
        </Link> */}
    </div>
    <input
        type="text"
        value={query}
        className="search"
        onChange={(e) => handleSearch(e)}
        placeholder="Search by Employee ID"
      />
    <DataGrid
      className="datagrid"
      rows={list}
      columns={badgeexColumns.concat(actionColumn)}
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
);};

export default Datatable;