// import { useState } from "react";
// import React from "react";
// import "./Form.scss";
// import Swal from "sweetalert2"

// const Form = () => {
//   const [section, setSection] = useState('');
//   const [name, setname] = useState('');
//   const [badge, setBadge] = useState('');
//   const [BEName, setBEName] = useState('');
//   const [TRNumber, setTRNumber] = useState('');
//   const [REGNumber, setREGNumber] = useState('');
//   const [smID, setSMid] = useState('');
//   const [BEid, setBEid] = useState('');
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     console.log("plpp")
//     e.preventDefault();

//     //Check if all fields are filled
//     const emptyFields = [];
//     if (!section) {
//       emptyFields.push("section");
//     }
//     if (!name) {
//       emptyFields.push("name");
//     }
//     if (!badge) {
//       emptyFields.push("badge");
//     }
//     if (!BEName) {
//       emptyFields.push("BEName");
//     }
//     if (!TRNumber) {
//       emptyFields.push("TRNumber");
//     }
//     if (!REGNumber) {
//       emptyFields.push("REGNumber");
//     }
    
//     if (!smID) {
//       emptyFields.push("smID");
//     }
//     if (!BEid) {
//       emptyFields.push("BEid");
//     }
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       setError("Please fill in all fields");
//       return;
//     }
    

//     const Request = { section, name, badge, BEName, TRNumber, REGNumber, smID, BEid };
    

//     const response = await fetch("/badgeRequest", {
//       method: "POST",
//       body: JSON.stringify(Request),
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//     console.log("asdad")
//     const json = await response.json();

//     if (!response.ok) {
//       if (response.status === 500) {
//         setError(json.error);
//       }
//     } if (response.ok) {


//       setSection("");
//       setname("");
//       setBadge("");
//       setBEName("");
//       setTRNumber("");
//       setREGNumber("");
//       setBEid("");
//       setSMid("");
//       setError(null);
//       setEmptyFields([]);
//       console.log("New Badge Request", json);
//       Swal.fire("Done!", "Badge Request Created!", "success");

//     }
//   };
//   return (



//     <form className="addrequest" onSubmit={handleSubmit}>

//       <h3 >Request for a Badge Examination </h3>


//       <label> Section : </label>
//       {emptyFields.includes("Section") && (
//         <div className="error1">*Please fill the field</div>
//       )}
//       <select className="dropdown"  value={section}  onChange={(e) => setSection(e.target.value)}>
//         <option value="">--Please select a Section--</option>
//         <option value="Cub">Cub</option>
//         <option value="Junior">Junior</option>
//         <option value="Senior">Senior</option>
//         </select>
       
    


//       <label> Name: </label>
//       {emptyFields.includes("Scout Name") && (
//         <div className="error1">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter Name"
//         onChange={(e) => setname(e.target.value)}
//         value={name}
//       />


//       <label> Badge: </label>
//       {emptyFields.includes("Badge") && (
//         <div className="error1">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter Name of the Badge"
//         onChange={(e) => setBadge(e.target.value)}
//         value={badge}
//       />


//       <label> Badge Examiner's Name: </label>
//       {emptyFields.includes("Badge Examire's Name") && (
//         <div className="error1">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter the Badge Examiner's Name"
//         onChange={(e) => setBEName(e.target.value)}
//         value={BEName}
//       />
//       <label> Troop Number : </label>
//       {emptyFields.includes("Troop Number") && (
//         <div className="error2">*Please fill the field</div>
//       )}
//       <input className="input1"
//         type="text"
//         placeholder="Enter Troop Number"
//         onChange={(e) => setTRNumber(e.target.value)}
//         value={TRNumber}
//       />


//       <label> Registration Number: </label>
//       {emptyFields.includes("Registration Number") && (
//         <div className="error2">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter Registration Number"
//         onChange={(e) => setREGNumber(e.target.value)}
//         value={REGNumber}
//       />


//       <label> Scout Master's ID: </label>
//       {emptyFields.includes("Scout Master's ID") && (
//         <div className="error2">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter Scout Master's ID"
//         onChange={(e) => setSMid(e.target.value)}
//         value={smID}
//       />

//       <label> Badge Examiner's ID: </label>
//       {emptyFields.includes("Badge Examiner's ID") && (
//         <div className="error2">*Please fill the field</div>
//       )}
//       <input
//         type="text"
//         placeholder="Enter the Badge Examiner's Name"
//         onChange={(e) => setBEid(e.target.value)}
//         value={BEid}
//       />
//       <button>SUBMIT</button>
//       {error && <div className="error1">{error}</div>}



      
//     </form>
//   );
 
// };


// export default Form;  



//new !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// import { useState } from "react";
// import React from "react";
// import "./Form.scss";
// import Swal from "sweetalert2";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const [section, setSection] = useState("");
//   const [name, setname] = useState("");
//   const [badge, setBadge] = useState("");
//   const [BEName, setBEName] = useState("");
//   const [TRNumber, setTRNumber] = useState("");
//   const [REGNumber, setREGNumber] = useState("");
//   const [smID, setSMid] = useState("");
//   const [BEid, setBEid] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const emptyFields = [];
//     if (!section) {
//       emptyFields.push("section");
//     }
//     if (!name) {
//       emptyFields.push("name");
//     }
//     if (!badge) {
//       emptyFields.push("badge");
//     }
//     if (!BEName) {
//       emptyFields.push("BEName");
//     }
//     if (!TRNumber) {
//       emptyFields.push("TRNumber");
//     }
//     if (!REGNumber) {
//       emptyFields.push("REGNumber");
//     }
//     if (!smID) {
//       emptyFields.push("smID");
//     }
//     if (!BEid) {
//       emptyFields.push("BEid");
//     }
//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       setError("Please fill in all fields");
//       return;
//     }

//     // Check if registration number and troop number are numeric
//     const isNumeric = /^\d+$/.test(TRNumber) && /^\d+$/.test(REGNumber);
//     if (!isNumeric) {
//       toast.error("Registration number and troop number must be numeric");
//       return;
//     }

//     const Request = {
//       section,
//       name,
//       badge,
//       BEName,
//       TRNumber,
//       REGNumber,
//       smID,
//       BEid,
//     };

//     const response = await fetch("/badgeRequest", {
//       method: "POST",
//       body: JSON.stringify(Request),
//       headers: {
//         "content-type": "application/json",
//       },
//     });

//     const json = await response.json();

//     if (!response.ok) {
//       if (response.status === 500) {
//         setError(json.error);
//       }
//     } else {
//       setSection("");
//       setname("");
//       setBadge("");
//       setBEName("");
//       setTRNumber("");
//       setREGNumber("");
//       setBEid("");
//       setSMid("");
//       setError(null);
//       setEmptyFields([]);
//       console.log("New Badge Request", json);
//       Swal.fire("Done!", "Badge Request Created!", "success");
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <form className="addrequest" onSubmit={handleSubmit}>
//         <h3>Request for a Badge Examination</h3>

//         <label>Section:</label>
//         {emptyFields.includes("section") && (
//           <div className="error1">*Please fill the field</div>
//         )}
//         <select
//           className="dropdown"
//  value={section}
//  onChange={(e) => setSection(e.target.value)}
// >
//  <option value="">--Please select a Section--</option>
//  <option value="Cub">Cub</option>
//  <option value="Junior">Junior</option>
//  <option value="Senior">Senior</option>
// </select>

// <label>Name:</label>
// {emptyFields.includes("name") && (
//  <div className="error1">*Please fill the field</div>
// )}
// <input
//  type="text"
//  placeholder="Enter Name"
//  onChange={(e) => setname(e.target.value)}
//  value={name}
// />

// <label>Badge:</label>
// {emptyFields.includes("badge") && (
//  <div className="error1">*Please fill the field</div>
// )}
// <input
//  type="text"
//  placeholder="Enter Name of the Badge"
//  onChange={(e) => setBadge(e.target.value)}
//  value={badge}
// />

// <label>Badge Examiner's Name:</label>
// {emptyFields.includes("BEName") && (
//  <div className="error1">*Please fill the field</div>
// )}
// <input
//  type="text"
//  placeholder="Enter the Badge Examiner's Name"
//  onChange={(e) => setBEName(e.target.value)}
//  value={BEName}
// />

// <label>Troop Number:</label>
// {emptyFields.includes("TRNumber") && (
//  <div className="error2">*Please fill the field</div>
// )}
// <input
//  className="input1"
//  type="text"
//  placeholder="Enter Troop Number"
//  onChange={(e) => setTRNumber(e.target.value)}
//  value={TRNumber}
// />

// <label>Registration Number:</label>
// {emptyFields.includes("REGNumber") && (
//  <div className="error2">*Please fill the field</div>
// )}
// <input
//  type="text"
//  placeholder="Enter Registration Number"
//  onChange={(e) => setREGNumber(e.target.value)}
//  value={REGNumber}
// />

// <label>Scout Master's ID:</label>
// {emptyFields.includes("smID") && (
//  <div className="error2">*Please fill the field</div>
// )}
// <input
//  type="text"
//  placeholder="Enter Scout Master's ID"
//  onChange={(e) => setSMid(e.target.value)}
//  value={smID}
// />

// <label>Badge Examiner's ID:</label>
// {emptyFields.includes("BEid") && (
//  <div className="error2">*Please fill the field</div>
// )}
// <input
//  type="text"
//  placeholder="Enter the Badge Examiner's Name"
//  onChange={(e) => setBEid(e.target.value)}
//  value={BEid}
// />
// <button type="submit">SUBMIT</button>
// {error && <div className="error1">{error}</div>}
// </form>
// </div>
// );
// };

// export default Form;




import { useState } from "react";
import React from "react";
import "./Form.scss";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [section, setSection] = useState("");
  const [name, setname] = useState("");
  const [badge, setBadge] = useState("");
  const [BEName, setBEName] = useState("");
  const [TRNumber, setTRNumber] = useState("");
  const [REGNumber, setREGNumber] = useState("");
  const [smID, setSMid] = useState("");
  const [BEid, setBEid] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const emptyFields = [];
    if (!section) {
      emptyFields.push("section");
    }
    if (!name) {
      emptyFields.push("name");
    }
    if (!badge) {
      emptyFields.push("badge");
    }
    if (!BEName) {
      emptyFields.push("BEName");
    }
    if (!TRNumber) {
      emptyFields.push("TRNumber");
    }
    if (!REGNumber) {
      emptyFields.push("REGNumber");
    }
    if (!smID) {
      emptyFields.push("smID");
    }
    if (!BEid) {
      emptyFields.push("BEid");
    }
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      setError("Please fill in all fields");
      return;
    }

    // Check if registration number and troop number are numeric
    const isNumeric = /^\d+$/.test(TRNumber) && /^\d+$/.test(REGNumber);
    if (!isNumeric) {
      toast.error("Registration number and troop number must be numeric");
      return;
    }

    const Request = {
      section,
      name,
      badge,
      BEName,
      TRNumber,
      REGNumber,
      smID,
      BEid,
    };

    const response = await fetch("/badgeRequest", {
      method: "POST",
      body: JSON.stringify(Request),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      if (response.status === 500) {
        setError(json.error);
      }
    } else {
      setSection("");
      setname("");
      setBadge("");
      setBEName("");
      setTRNumber("");
      setREGNumber("");
      setBEid("");
      setSMid("");
      setError(null);
      setEmptyFields([]);
      console.log("New Badge Request", json);
      Swal.fire("Done!", "Badge Request Created!", "success");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className="addrequest" onSubmit={handleSubmit}>
        <h3>Request for a Badge Examination</h3>
        <div className="form-wrapper left-form-wrapper">
        <label>Section:</label>
        {emptyFields.includes("section") && (
          <div className="error1">*Please fill the field</div>
        )}
        <select
          className="dropdown"
 value={section}
 onChange={(e) => setSection(e.target.value)}
>
 <option value="">--Please select a Section--</option>
 <option value="Cub">Cub</option>
 <option value="Junior">Junior</option>
 <option value="Senior">Senior</option>
</select>

<label>Name:</label>
{emptyFields.includes("name") && (
 <div className="error1">*Please fill the field</div>
)}
<input
 type="text"
 placeholder="Enter Name"
 onChange={(e) => setname(e.target.value)}
 value={name}
/>

<label>Badge:</label>
{emptyFields.includes("badge") && (
 <div className="error1">*Please fill the field</div>
)}
<input
 type="text"
 placeholder="Enter Name of the Badge"
 onChange={(e) => setBadge(e.target.value)}
 value={badge}
/>

<label>Badge Examiner's Name:</label>
{emptyFields.includes("BEName") && (
 <div className="error1">*Please fill the field</div>
)}
<input
 type="text"
 placeholder="Enter the Badge Examiner's Name"
 onChange={(e) => setBEName(e.target.value)}
 value={BEName}
/>
</div>
<div className="form-wrapper right-form-wrapper">

<label>Troop Number:</label>
{emptyFields.includes("TRNumber") && (
 <div className="error2">*Please fill the field</div>
)}
<input
 className="input1"
 type="text"
 placeholder="Enter Troop Number"
 onChange={(e) => setTRNumber(e.target.value)}
 value={TRNumber}
/>

<label>Registration Number:</label>
{emptyFields.includes("REGNumber") && (
 <div className="error2">*Please fill the field</div>
)}
<input
 type="text"
 placeholder="Enter Registration Number"
 onChange={(e) => setREGNumber(e.target.value)}
 value={REGNumber}
/>

<label>Scout Master's ID:</label>
{emptyFields.includes("smID") && (
 <div className="error2">*Please fill the field</div>
)}
<input
 type="text"
 placeholder="Enter Scout Master's ID"
 onChange={(e) => setSMid(e.target.value)}
 value={smID}
/>

<label>Badge Examiner's ID:</label>
{emptyFields.includes("BEid") && (
 <div className="error2">*Please fill the field</div>
)}
<input
 type="text"
 placeholder="Enter the Badge Examiner's Name"
 onChange={(e) => setBEid(e.target.value)}
 value={BEid}
/>
</div>
<button type="submit">SUBMIT</button>
{error && <div className="error1">{error}</div>}
</form>
</div>
);
};

export default Form;


