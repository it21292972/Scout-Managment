import React from 'react'
import "./BadgeSecretaryBRT.scss";
import { DataGrid } from "@mui/x-data-grid";
import { BERequestColumns, userRows } from "../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Swal from "sweetalert2";

import jsPDF from "jspdf";
import "jspdf-autotable";

const BadgeSecretaryBRT = () => {
  const [list, setList] = useState([]);
 const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch("/badgeIssueOrder");

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
          axios.delete(`/badgeIssueOrder/${id}`);
          setList(list.filter((item) => item._id !== id));
          console.log(`${id}`);
          Swal.fire("Deleted!", "Your job has been deleted.", "success");
        }
      });
    } catch (err) {}
  };



  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setQuery(getSearch);

    if (getSearch.length > 0) {
      const searchData = list.filter((item) =>
        item.badgeName.toLowerCase().includes(getSearch)
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
            <div
              className="updateButton"
              ><Link style={{textDecoration:"none",color:"green"}}to={`/badgeSecretaryUBO/${params.row._id}`}>
              Update</Link>
              
            </div>


          </div>
        );
      },
    },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    const text = "Badge Issue Report";
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
    const addressX =doc.internal.pageSize.getWidth() - doc.getTextWidth(addressLines[0]) - 50;
    let addressY = 15;
    doc.setFontSize(10);
    addressLines.forEach((line) => {
      doc.text(line, addressX, addressY);
      addressY += 4.5;
    });
      
      const CSlogo = require('../image/CSlogo.png');
      doc.addImage(CSlogo, 'PNG', 10, 10, 50, 25);
      const fontSize = 20;
      doc.setFontSize(fontSize);
      doc.autoTable({
        startY: 80,
        theme: "striped",
        headStyles: { fillColor: [92, 30, 154] },
        alternateRowStyles: { fillColor: [231, 215, 252] },
        tableLineColor: [92, 30, 154],
        tableLineWidth: 0.1,
        head: [  
          [
                 "Issue Id",
                 "Scout ID",
                 "Scout Name",
                 "Badge Name",
                 "Date",
                 "Remarks",
             ],
            ],
        body: list.map((item) => [
          item.IssueId,
                item.scoutId,
                item.scoutName,
                item.badgeName,
                item.passedDate,
                item.remark,
        ]),
      });
      
      doc.save("Badge Isssue Report.pdf");

    // const doc = new jsPDF();
    // doc.text("Badge Requests", 20, 10);
    // doc.autoTable({
    //   theme: "grid",
    //   head: [
    //     [
    //       "Issue Id",
    //       "Scout ID",
    //       "Scout Name",
    //       "Badge Name",
    //       "Date",
    //       "Remarks",
    //     ],
    //   ],
  //     body: list.map((item) => [
  //       item.IssueId,
  //       item.scoutId,
  //       item.scoutName,
  //       item.badgeName,
  //       item.passedDate,
  //       item.remark,

  //     ]),
  //   });
  //   doc.save("Badge Requests.pdf");
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
        columns={BERequestColumns.concat(actionColumn)}
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
export default BadgeSecretaryBRT;
