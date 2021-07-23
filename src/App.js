import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/SignIn";
// import Header from './components/Header';
import AdminLayout from './layouts/AdminLayout'
import MainPage from './layouts/MainPage'
import { ProtectedRoute } from './ProtectedRoute'
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={SignIn} />
          <ProtectedRoute path="/dashboard"  component={AdminLayout} />

          <Route  path="*"  component={NotFound}/>
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default App;
