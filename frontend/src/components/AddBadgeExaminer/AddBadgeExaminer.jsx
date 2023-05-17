// import React from "react";
// import { useState } from "react";
// import "./addBadgeExaminer.scss";
// // import "./AddSM.scss";
// import Swal from "sweetalert2";

// const AddBadgeExaminer = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const [address, setAddress] = useState("");
//     const [contact, setContact] = useState("");
//     const [warrantID, setWarrantID] = useState("");
//     const [error, setError] = useState(null);
//     const [emptyFields, setEmptyFields] = useState([]);

//     const handleSubmit = async (e) => {
//         console.log("aiuiueni");
//         e.preventDefault();

//         const emptyFields = [];

//         if (!firstName) {
//             emptyFields.push("firstName");
//         }
//         if (!lastName) {
//             emptyFields.push("lastName");
//         }
//         if (!userName) {
//             emptyFields.push("userName");
//         }
//         if (!password) {
//             emptyFields.push("password");
//         }
//         if (!address) {
//             emptyFields.push("address");
//         }
//         if (!contact) {
//             emptyFields.push("contact");
//         }
//         if (!warrantID) {
//             emptyFields.push("warrantID");
//         }

//         if (emptyFields.length > 0) {
//             setEmptyFields(emptyFields);
//             return;
//         }

//         const badgeExaminer = { firstName, lastName, userName, password, address, contact, warrantID };

//         const response = await fetch("/addbe", {
//             method: "POST",
//             body: JSON.stringify(badgeExaminer),
//             headers: {
//                 "content-type": "application/json",
//             },
//         });

//         const json = await response.json();

//         // if (!response.ok) {
//         // // if (response.status === 500) {
//         // // Swal.fire("Error!", "This Employee ID is already exist!", "error");
//         // // } else {
//         // // setError(json.error);
//         // // }
//         // }
//         if (response.ok) {
//             setFirstName("");
//             setLastName("");
//             setUserName("");
//             setPassword("");
//             setAddress("");
//             setContact("");
//             setWarrantID("");

//             setError(null);
//             console.log("new Badge Examiner Added", json);
//             Swal.fire("Done!", "New Badge Examiner Added Successfully!", "success");
//         }
//     };
//     return (
//         <form className="addBadgeEx">

//             <label>Enter First Name</label>
//             <input
//                 type="text"
//                 onChange={(e) => setFirstName(e.target.value)}
//                 value={firstName}
//             />
//             {emptyFields.includes("firstName") && (
//                 <div className="error">*Please enter First Name</div>
//             )}
//             <label>Enter Last Name</label>
//             <input
//                 type="text"
//                 onChange={(e) => setLastName(e.target.value)}
//                 value={lastName}
//             />
//             {emptyFields.includes("lastName") && (
//                 <div className="error">*Please enter Last Name</div>
//             )}

//             <label>Enter User Name</label>
//             <input
//                 type="text"
//                 onChange={(e) => setUserName(e.target.value)}
//                 value={userName}
//             />
//             {emptyFields.includes("userName") && (
//                 <div className="error">*Please enter User Name</div>
//             )}

//             <label>Password</label>
//             <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//             />
//             {emptyFields.includes("password") && (
//                 <div className="error">*Please enter Password</div>
//             )}


//             <label>Enter Address</label>
//             <input
//                 type="text"
//                 onChange={(e) => setAddress(e.target.value)}
//                 value={address}
//             />
//             {emptyFields.includes("address") && (
//                 <div className="error">*Please enter Address</div>
//             )}

//             <label>Enter Contact</label>
//             <input
//                 type="tel"
//                 minLength={10}
//                 maxLength={10}
//                 onChange={(e) => setContact(e.target.value)}
//                 value={contact}
//             />
//             {emptyFields.includes("contact") && (
//                 <div className="error">*Please enter Contact</div>
//             )}

//             <label>Enter Warrent ID</label>
//             <input
//                 type="text"
//                 onChange={(e) => setWarrantID(e.target.value)}
//                 value={warrantID}
//             />
//             {emptyFields.includes("warrantID") && (
//                 <div className="error">*Please enter Warrent ID</div>
//             )}


//             <button onClick={handleSubmit}>ADD</button>
//             <p>{error && <p className="error">{error}</p>}</p>
//         </form>
//     );
// };

// export default AddBadgeExaminer;



// import React, { useState } from "react";
// import "./addBadgeExaminer.scss";
// import Swal from "sweetalert2";

// const AddBadgeExaminer = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [warrantID, setWarrantID] = useState("");
//   const [error, setError] = useState(null);
//   const [emptyFields, setEmptyFields] = useState([]);

//   const validateEmail = (email) => {
//     // Email validation logic
//     // Return true if email is valid, false otherwise
//     // You can use a regular expression or a library like validator.js for email validation
//     const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     return emailRegex.test(email);
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     // Phone number validation logic
//     // Return true if phone number is valid, false otherwise
//     // You can use a regular expression or a library like validator.js for phone number validation
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emptyFields = [];

//     if (!firstName) {
//       emptyFields.push("firstName");
//     }
//     if (!lastName) {
//       emptyFields.push("lastName");
//     }
//     if (!userName) {
//       emptyFields.push("userName");
//     }
//     if (!password) {
//       emptyFields.push("password");
//     }
//     if (!address) {
//       emptyFields.push("address");
//     }
//     if (!contact) {
//       emptyFields.push("contact");
//     }
//     if (!warrantID) {
//       emptyFields.push("warrantID");
//     }

//     if (emptyFields.length > 0) {
//       setEmptyFields(emptyFields);
//       return;
//     }

//     if (!validateEmail(userName)) {
//       Swal.fire("Invalid Input!", "Please enter a valid email address.", "error");
//       return;
//     }

//     if (!validatePhoneNumber(contact)) {
//       Swal.fire("Invalid Input!", "Please enter a valid 10-digit phone number.", "error");
//       return;
//     }

//     const badgeExaminer = {
//       firstName,
//       lastName,
//       userName,
//       password,
//       address,
//       contact,
//       warrantID,
//     };

//     const response = await fetch("/addbe", {
//       method: "POST",
//       body: JSON.stringify(badgeExaminer),
//       headers: {
//         "content-type": "application/json",
//       },
//     });

//     const json = await response.json();

//     if (response.ok) {
//       setFirstName("");
//       setLastName("");
//       setUserName("");
//       setPassword("");
//       setAddress("");
//       setContact("");
//       setWarrantID("");

//       setError(null);
//       console.log("New Badge Examiner Added", json);
//       Swal.fire("Done!", "New Badge Examiner Added Successfully!", "success");
//     } else {
//       setError(json.error);
//     }
//   };

//   return (
//     <form className="addBadgeEx">
//       <label>Enter First Name</label>
//       <input
//         type="text"
//         onChange={(e) => setFirstName(e.target.value)}
//         value={firstName}
//       />
//       {emptyFields.includes("firstName") && (
//         <div className="error">*Please enter First
//       </div>
//       )}
//       <label>Enter Last Name</label>
//       <input
//         type="text"
//         onChange={(e) => setLastName(e.target.value)}
//         value={lastName}
//       />
//       {emptyFields.includes("lastName") && (
//         <div className="error">*Please enter Last Name</div>
//       )}

//       <label>Enter User Name (Email)</label>
//       <input
//         type="email"
//         onChange={(e) => setUserName(e.target.value)}
//         value={userName}
//       />
//       {emptyFields.includes("userName") && (
//         <div className="error">*Please enter User Name</div>
//       )}

//       <label>Password</label>
//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       {emptyFields.includes("password") && (
//         <div className="error">*Please enter Password</div>
//       )}

//       <label>Enter Address</label>
//       <input
//         type="text"
//         onChange={(e) => setAddress(e.target.value)}
//         value={address}
//       />
//       {emptyFields.includes("address") && (
//         <div className="error">*Please enter Address</div>
//       )}

//       <label>Enter Contact (10-digit Phone Number)</label>
//       <input
//         type="tel"
//         minLength={10}
//         maxLength={10}
//         onChange={(e) => setContact(e.target.value)}
//         value={contact}
//       />
//       {emptyFields.includes("contact") && (
//         <div className="error">*Please enter Contact</div>
//       )}

//       <label>Enter Warrant ID</label>
//       <input
//         type="text"
//         onChange={(e) => setWarrantID(e.target.value)}
//         value={warrantID}
//       />
//       {emptyFields.includes("warrantID") && (
//         <div className="error">*Please enter Warrant ID</div>
//       )}

//       <button onClick={handleSubmit}>ADD</button>
//       {error && <p className="error">{error}</p>}
//     </form>
//   );
// };

// export default AddBadgeExaminer;



import React, { useState } from "react";
import "./addBadgeExaminer.scss";
import Swal from "sweetalert2";

const AddBadgeExaminer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [warrantID, setWarrantID] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const validateEmail = (email) => {
    // Email validation logic
    // Return true if email is valid, false otherwise
    // You can use a regular expression or a library like validator.js for email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation logic
    // Return true if phone number is valid, false otherwise
    // You can use a regular expression or a library like validator.js for phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validatePassword = (password) => {
    // Password validation logic
    // Return true if password is valid, false otherwise
    // You can define your own password validation rules here
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = [];

    if (!firstName) {
      emptyFields.push("firstName");
    }
    if (!lastName) {
      emptyFields.push("lastName");
    }
    if (!userName) {
      emptyFields.push("userName");
    }
    if (!password) {
      emptyFields.push("password");
    }
    if (!address) {
      emptyFields.push("address");
    }
    if (!contact) {
      emptyFields.push("contact");
    }
    if (!warrantID) {
      emptyFields.push("warrantID");
    }

    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      return;
    }

    if (!validateEmail(userName)) {
      Swal.fire("Invalid Input!", "Please enter a valid email address.", "error");
      return;
    }

    if (!validatePhoneNumber(contact)) {
      Swal.fire("Invalid Input!", "Please enter a valid 10-digit phone number.", "error");
      return;
    }

    if (!validatePassword(password)) {
      Swal.fire("Invalid Input!", "Password must contain at least 6 characters.", "error");
      return;
    }

    const badgeExaminer = {
      firstName,
      lastName,
      userName,
      password,
      address,
      contact,
      warrantID,
    };

    const response = await fetch("/addbe", {
      method: "POST",
      body: JSON.stringify(badgeExaminer),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setUserName("");
      setPassword("");
      setAddress("");
      setContact("");
      setWarrantID("");

      setError(null);
      console.log("New Badge Examiner Added", json);
      Swal.fire("Done!", "New Badge Examiner Added Successfully!", "success");
    } else {
      setError(json.error);
    }
  };

  return (
    <form className="addBadgeEx">
      <label>Enter First Name</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      {emptyFields.includes("firstName") && (
        <div className="error">*Please enter First Name</div>
      )}
      <label>Enter Last Name</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      {emptyFields.includes("lastName") && (
        <div className="error">*Please enter Last Name</div>
      )}

      <label>Enter User Name (Email)</label>
      <input
        type="email"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      {emptyFields.includes("userName") && (
        <div className="error">*Please enter User Name</div>
      )}

      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {emptyFields.includes("password") && (
        <div className="error">*Please enter Password</div>
      )}

      <label>Enter Address</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />
      {emptyFields.includes("address") && (
        <div className="error">*Please enter Address</div>
      )}

      <label>Enter Contact (10-digit Phone Number)</label>
      <input
        type="tel"
        minLength={10}
        maxLength={10}
        onChange={(e) => setContact(e.target.value)}
        value={contact}
      />
      {emptyFields.includes("contact") && (
        <div className="error">*Please enter Contact</div>
      )}

      <label>Enter Warrant ID</label>
      <input
        type="text"
        onChange={(e) => setWarrantID(e.target.value)}
        value={warrantID}
      />
      {emptyFields.includes("warrantID") && (
        <div className="error">*Please enter Warrant ID</div>
      )}

      <button onClick={handleSubmit}>ADD</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default AddBadgeExaminer;
