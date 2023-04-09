import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './login';
import Appointment from './schedule_appoint';
import Register from './form';
import Reschedule from './reschedule_appoint';
import History from './history_appointment';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/reschedule" element={<Reschedule/>}/>
      <Route path="/history" element={<History/>}/>
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
