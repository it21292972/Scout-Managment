import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import { Modal, Form, Button } from 'react-bootstrap';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

function MonthScheduler() {
  const [examinations, setExaminations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedExamination, setSelectedExamination] = useState(null);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    async function fetchExaminations() {
      const response = await axios.get('/badgeExamineTime');
      setExaminations(response.data);
    }
    fetchExaminations();
  }, []);

  async function handleSelect({ start, end }) {
    if (start < new Date()) {
      alert('You cannot select past dates');
      return;
    }
    setSelectedExamination(null);
    setShowModal(true);
    setFormState({ title: '', start, end });
  }

  function handleEventSelect(examination) {
    setSelectedExamination(examination);
    setShowModal(true);
    setFormState({ title: examination.title, start: examination.start, end: examination.end });
  }

  async function handleFormSubmit(examination) {
    examination.preventDefault();
    const { title, start, end } = formState;
    const examinationData = { title, start, end };
    let updatedExamination;
    if (selectedExamination) {
      updatedExamination = await axios.put(`/badgeExamineTime/${selectedExamination._id}`, examinationData);
      setExaminations(examinations.map((examination) => (examination._id === updatedExamination.data._id ? updatedExamination.data : examination)));
    } else {
      updatedExamination = await axios.post('/badgeExamineTime', examinationData);
      setExaminations([...examinations, updatedExamination.data]);
    }
    setSelectedExamination(updatedExamination.data);
  }

  // async function handleEventResize(examination) {
  //   const { id, start, end } = examination;
  //   await axios.put(`/badgeExaminerTime/${id}`, { start, end });
  //   setExamination(
  //     examination.map((e) => (e._id === id ? { ...e, start, end } : e))
  //   );
  // }

  async function handleEventDelete(examination)  {
    await axios.delete(`/badgeExamineTime/${examination._id}`);
    setExaminations(examinations.filter((e) => e._id !== examination._id));
    setShowModal(false);
  }

  function handleFormChange(examination) {
    const { name, value } = examination.target;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <div style={{ height: '500pt' }}>
      <Calendar
        localizer={localizer}
        events={examinations}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventSelect}
        style={{ flex: 1, height: '100%' }}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedExamination ? 'Edit Examination' : 'Create Badge Examination'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formState.title}
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
            {selectedExamination ? 'Update' : 'Create'}
          </Button>
          {selectedExamination && (
            <Button variant="danger" onClick={() => handleEventDelete(selectedExamination)}>
              Delete
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MonthScheduler;
  
