import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/SignIn";
import Header from './components/Header';
import Layout from './components/dashboard/Layout'
import { ProtectedRoute } from './ProtectedRoute'
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/login" exact component={SignIn} />
          <ProtectedRoute path="/dashboard"  component={Layout} />

          <Route  path="*"  component={NotFound}/>
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default App;
