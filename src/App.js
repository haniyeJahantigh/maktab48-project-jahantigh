import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/SignIn";
import Header from './components/Header';
import Layout from './components/dashboard/Layout'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/dashboard/manage" exact component={Layout} />
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default App;
