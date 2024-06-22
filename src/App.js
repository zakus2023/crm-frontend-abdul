import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entry from "./Pages/Entry/Entry";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./Pages/Dshboard/Dashboard";
import AddNewTicket from "./Pages/Add-Ticket/AddNewTicket";

function App() {
  return (
    <div className="App">
      {/* <Entry/> 
      <Dashboard/>*/}
      <DefaultLayout>
        <AddNewTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
