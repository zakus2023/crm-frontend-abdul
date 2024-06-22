import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entry from "./Pages/Entry/Entry";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./Pages/Dshboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
