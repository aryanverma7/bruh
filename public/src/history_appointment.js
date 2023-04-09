import React, { useEffect, useState } from 'react';
import AppointmentHistory from './AppointmentHistory';
import './App.css';
import Nav from './Navbar';

const AppointmentHistoryPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('/api/appointments')
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
          <div>
            <Nav/>
        </div>
      <AppointmentHistory appointments={appointments} />
    </div>
  );
};

export default AppointmentHistoryPage;
