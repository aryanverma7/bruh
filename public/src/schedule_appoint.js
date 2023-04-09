import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./App.css";
import Nav from "./Navbar";

function AppointmentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send appointment data to the backend
  };

  return (
    <div>
        <div>
            <Nav/>
        </div>
    <h1>Schedule your Appointment</h1>
    <div className="schedule_appoint">
    <form onSubmit={handleSubmit}>
        <div>
      <label className="labels"> Name:</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <label className="labels">Email:   </label >
     
        <input
        className="input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
   <div>
      <label className="labels">
        Date:
        </label>
        <input
        className="input"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        </div>
    <div>
      <label className="labels">
        Time:
        </label>
        <input
        className="input"
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        </div>
 
      <button  className="button" type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default AppointmentForm;
