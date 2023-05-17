import React, { useState } from 'react';
import './calculationComponent.scss';

const CalculationComponent = () => {
  const [eventAttendance, setEventAttendance] = useState();
  const [totalCost, setTotalCost] = useState();
  const [costSc, setCostSc] = useState();

  const handleInputChange = (e) => {
    setEventAttendance(parseInt(e.target.value, 10));
  };

  const handleCostScChange = (e) => {
    setCostSc(parseInt(e.target.value, 10));
  };

  const calculateCost = () => {
    const calculatedCost = eventAttendance * costSc;
    setTotalCost(calculatedCost);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('si-LK', { style: 'currency', currency: 'LKR' }).format(value);
  };

  return (
    <div className="calculation-container">
      <div className="calculation-wrapper">
        <div className="calculation-component centered">
          <h1>Event Budget Calculation</h1>
          <div className="input-container">
            <label htmlFor="eventAttendance">Event Attendance:</label>
            <input
              type="number"
              id="eventAttendance"
              value={eventAttendance}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="costSc">Cost per Attendee:</label>
            <input
              type="number"
              id="costSc"
              value={costSc}
              onChange={handleCostScChange}
            />
          </div>
          <button onClick={calculateCost}>Calculate</button>
          {totalCost > 0 && (
            <div className="result-container">
              <p>Total Cost: {formatCurrency(totalCost)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculationComponent;
