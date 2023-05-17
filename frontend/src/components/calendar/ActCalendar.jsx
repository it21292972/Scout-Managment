import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

function ActCalendar() {
  const [meeting, setMeetings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [specificMeeting, setSpecificMeeting] = useState(null);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    async function fetchMeeting() {
      const response = await axios.get('/calendar');
      setMeetings(response.data);
    }
    fetchMeeting();
  }, []);

  async function handleSelect({ start, end }) {
    if (start < new Date()) {
      toast.error('You cannot select past dates');
      return;
    }
    setSpecificMeeting(null);
    setShowModal(true);
    setFormState({ title: '', start, end });
  }

  function handleEventSelect(meeting) {
    setSpecificMeeting(meeting);
    setShowModal(true);
    setFormState({ title: meeting.title, start: meeting.start, end: meeting.end });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const { title, start, end } = formState;
    const meetingData = { title, start, end };
    let updatedMeeting;
    if (specificMeeting) {
      updatedMeeting = await axios.put(`/calendar/${specificMeeting._id}`, meetingData);
      setMeetings(meeting.map((meeting) => (meeting._id === updatedMeeting.data._id ? updatedMeeting.data : meeting)));
    } else {
      updatedMeeting = await axios.post('/calendar', meetingData);
      setMeetings([...meeting, updatedMeeting.data]);
    }
    setSpecificMeeting(updatedMeeting.data);
    toast.success(`${specificMeeting ? 'Meeting updated' : 'Meeting created'} successfully`);
    setShowModal(false);
  }

  async function handleEventDelete(meeting) {
    await axios.delete(`/calendar/${meeting._id}`);
    setMeetings(meeting.filter((e) => e._id !== meeting._id));
    setShowModal(false);
    toast.success('Meeting deleted successfully');
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <div style={{ height: '500pt' }}>
      <Calendar
        localizer={localizer}
        events={meeting}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventSelect}
        style={{ flex: 1, height: '100%' }}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{specificMeeting ? 'Edit Examination' : 'Create Meeting'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formState
                  .title}
                  onChange={handleFormChange}
                  placeholder="Enter title"
                />
              </Form.Group>
              <Form.Group controlId="formStart">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="start"
                  value={moment(formState.start).format('YYYY-MM-DDTHH:mm')}
                  onChange={handleFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formEnd">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="end"
                  value={moment(formState.end).format('YYYY-MM-DDTHH:mm')}
                  onChange={handleFormChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={handleFormSubmit}>
              {specificMeeting ? 'Update' : 'Create'}
            </Button>
            {specificMeeting && (
              <Button variant="danger" onClick={() => handleEventDelete(specificMeeting)}>
                Delete
              </Button>
            )}
          </Modal.Footer>
        </Modal>
        <ToastContainer /> {/* Add ToastContainer to render toast notifications */}
      </div>
    );
  }
  
  export default ActCalendar;
  