import React from "react";
import { useState, useEffect } from "react";
import "./updateEventComp.scss";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEventComp = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    eventAttendance: "",
    eventDetails: "",
    eventBudget: "",
    eventsId: "",
  });

  useEffect(() => {
    axios
      .get(`/event/${id}`)
      .then((res) => {
        setValues({
          ...values,
          eventAttendance: res.data.eventAttendance,
          eventDetails: res.data.eventDetails,
          eventBudget: res.data.eventBudget,
          eventsId: res.data.eventsId,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (values.eventAttendance < 0 || values.eventBudget < 0 || values.eventsId < 0) {
      Swal.fire("Error!", "Negative values are not allowed.", "error");
      return;
    }

    axios
      .put(`/event/update/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Event Updated Successfully!", "success");
        navigate("/ViewEvent");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="updateEvent" onSubmit={handleUpdate}>
      <label>Event Attendance:</label>
      <input
        type="number"
        value={values.eventAttendance}
        onChange={(e) => setValues({ ...values, eventAttendance: e.target.value })}
        required
      />

      <label>Event Details:</label>
      <input
        type="text"
        value={values.eventDetails}
        onChange={(e) => setValues({ ...values, eventDetails: e.target.value })}
        required
        pattern="[A-Za-z]+"
        title="Only alphabets are allowed"
      />

      <label>Event Budget:</label>
      <input
        type="number"
        value={values.eventBudget}
        onChange={(e) => setValues({ ...values, eventBudget: e.target.value })}
        required
      />

      <label>Event Id:</label>
      <input
        type="number"
        value={values.eventsId}
        onChange={(e) => setValues({ ...values, eventsId: e.target.value })}
        required
      />

      <button type="submit">Update</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UpdateEventComp;
