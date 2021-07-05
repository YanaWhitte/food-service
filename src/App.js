import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from "react-router";
import Sidebar from "./components/main/Sidebar";
import ContentContainer from "./components/main/ContentContainer";
import Dashboard from "./components/main/Dashboard";
import Setting from "./components/main/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={ContentContainer} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/setting" component={Setting} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
