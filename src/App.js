import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/SignIn";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/login" exact component={SignIn} />
          {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default App;
