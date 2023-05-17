import React, { useState } from "react";
import Swal from "sweetalert2";
import "./addEvent.scss";

const AddEvents = () => {
  const [eventAttendance, setEventAttendance] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [eventBudget, setEventBudget] = useState("");
  const [eventsId, setEventsId] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = [];
    if (!eventAttendance) {
      emptyFields.push("eventAttendance");
    }
    if (!eventDetails) {
      emptyFields.push("eventDetails");
    }
    if (!eventBudget) {
      emptyFields.push("eventBudget");
    }
    if (!eventsId) {
      emptyFields.push("eventsId");
    }

    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      return;
    }

    if (!isNaN(eventDetails)) {
      Swal.fire("Error!", "Number values cannot be added to Event Details.", "error");
      return;
    }

    if (eventAttendance < 0 || eventBudget < 0 || eventsId < 0) {
      Swal.fire("Error!", "Negative values are not allowed.", "error");
      return;
    }

    const event = { eventAttendance, eventDetails, eventBudget, eventsId };
    const response = await fetch("/event/add", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      if (response.status === 500) {
        Swal.fire("Error!", "This Event ID already exists!", "error");
      } else {
        setError(json.err);
      }
    }

    if (response.ok) {
      setEventAttendance("");
      setEventDetails("");
      setEventBudget("");
      setEventsId("");
      Swal.fire("Done!", "Event added successfully!", "success");
    }
  };

  return (
    <form className="addevent" onSubmit={handleSubmit}>
      <label>Event Attendance:</label>
      <input
        type="text"
        placeholder="Enter Event Attendance"
        onChange={(e) => setEventAttendance(e.target.value)}
        value={eventAttendance}
      />
      {emptyFields.includes("eventAttendance") && (
        <div className="error">*Please enter Event Attendance</div>
      )}

      <label>Event Details:</label>
      <input
        type="text"
        placeholder="Enter Event Details"
        onChange={(e) => setEventDetails(e.target.value)}
        value={eventDetails}
      />
      {emptyFields.includes("eventDetails") && (
        <div className="error">*Please enter Event Details</div>
      )}

      <label>Event Budget:</label>
      <input
        type="text"
        placeholder="Enter Event Budget"
        onChange={(e) => setEventBudget(e.target.value)}
        value={eventBudget}
      />
      {emptyFields.includes("eventBudget") && (
        <div className="error">*Please enter Event Budget</div>
      )}

      <label>Event Id:</label>
      <input
        type="number"
        placeholder="Enter Events Id"
        onChange={(e) => setEventsId(e.target.value)}
        value={eventsId}
      />
        {emptyFields.includes("eventsId") && (
    <div className="error">*Please enter Event Id</div>
  )}

  <button>Add Event</button>
  <p>{error && <p className="error">{error}</p>}</p>
</form>
);
};

export default AddEvents;