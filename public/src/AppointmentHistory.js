import React from 'react';

const AppointmentHistory = ({ appointments }) => {
  return (
    <div>
      <h2>Appointment History</h2>
      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>Pet Name: {appointment.petName}</p>
          <p>Reason for Visit: {appointment.reasonForVisit}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentHistory;
