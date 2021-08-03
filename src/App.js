import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import SignIn from "./components/SignIn";
// import Header from './components/Header';
import AdminLayout from './layouts/AdminLayout'
import MainPage from './layouts/MainPage'
import { ProtectedRoute } from './ProtectedRoute'
import NotFound from "./pages/NotFound";
import Payment from './components/storPage/Payment'
import Successful from "./pages/store/Successful";
import Faild from "./pages/store/Faild";



function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <ProtectedRoute path="/dashboard"  component={AdminLayout} />
          <Route path="/shaparak/payment" exact component={Payment} />
          <Route path="/success/:id" exact component={Successful} />
          <Route path="/failed" exact component={Faild} />
          <Route path="/"   component={MainPage} />

          <Route  path="*"  component={NotFound}/>
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default App;
