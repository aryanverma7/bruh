import React, { useState } from 'react';
import "./App.css";
import Nav from "./Navbar";

const RescheduleAppointmentForm = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
  };

  return (
    <div>
          <div>
            <Nav/>
        </div>
    <h1>Re-schedule your Appointment</h1>
    <div className='reschedule_appoint'>
    <form onSubmit={handleSubmit}>
      <div >
        <label className='labels' htmlFor="currentDate">Current Date:</label>
        <input  className='input'type="date" id="currentDate" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} />
      </div>
      <div>
        <label className='labels' htmlFor="currentTime">Current Time:</label>
        <input  className='input'type="time" id="currentTime" value={currentTime} onChange={(e) => setCurrentTime(e.target.value)} />
      </div>
      <div>
        <label className='labels' htmlFor="newDate">New Date:</label>
        <input  className='input'type="date" id="newDate" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
      </div>
      <div>
        <label className='labels' htmlFor="newTime">New Time:</label>
        <input  className='input'type="time" id="newTime" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
      </div>
      <button className='button'type="submit">Reschedule</button>
    </form>
    </div>
    </div>
  );
};

export default RescheduleAppointmentForm;
