import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entry from "./Pages/Entry/Entry";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./Pages/Dshboard/Dashboard";
import AddNewTicket from "./Pages/Add-Ticket/AddNewTicket";
import TicketList from "./Pages/TiscketList/TicketList";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Entry/> 
      <Dashboard/>
      <AddNewTicket />*/}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
