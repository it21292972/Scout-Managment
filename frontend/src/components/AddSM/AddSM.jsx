import React from "react";
import { useState } from "react";
import "./AddSM.scss";
import Swal from "sweetalert2";

const AddScoutMaster = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [warrantID, setWarrantID] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation regex pattern
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
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
      Swal.fire("Error", "Invalid email address", "error");
      return;
    }

    if (!validatePhoneNumber(contact)) {
      Swal.fire("Error", "Invalid phone number", "error");
      return;
    }

    const ScoutMaster = {
      firstName,
      lastName,
      userName,
      password,
      address,
      contact,
      warrantID,
    };

    const response = await fetch("/sm", {
      method: "POST",
      body: JSON.stringify(ScoutMaster),
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

      Swal.fire("Done!", "New Scout Master Added Successfully!", "success");
    } else {
      Swal.fire("Error", json.error, "error");
    }
  };

  return (
    <form className="addSM">
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
        type="text"
       
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      {emptyFields.includes("userName") && (
        <div className="error">*Please enter User Name (Email)</div>
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

      <label>Enter Contact</label>
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
    </form>
  );
};

export default AddScoutMaster;









