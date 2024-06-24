import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entry from "./Pages/Entry/Entry";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./Pages/Dshboard/Dashboard";
import AddNewTicket from "./Pages/Add-Ticket/AddNewTicket";
import TicketList from "./Pages/TiscketList/TicketList";
import Ticket from "./Pages/Ticket/Ticket";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Entry />} />
          <Route  element={<DefaultLayout />}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addnewticket" element={<AddNewTicket />} />
            <Route path="/ticketlist" element={<TicketList />} />
            <Route path="/ticket/:id" element={<Ticket />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
