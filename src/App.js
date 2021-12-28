import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/shared/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import Dashboard from "./components/dashbord/Dashboard";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import CreateWallet from "./components/dashbord/dashboardoperations/CreateWallet";
function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={Nav}/>
    <Switch>
    <Route path="/" exact component={Welcome}/>
    <Route path="/dashboard" exact component={Dashboard}/>
    <Route path="/createwallet" exact component={CreateWallet}/>







    </Switch>
         
    </BrowserRouter>
  );
}

export default App;
