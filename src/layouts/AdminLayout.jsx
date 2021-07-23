import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import Manage from '../components/dashboard/Manage';
import Orders from '../components/dashboard/Orders';
import StockPrice from '../components/dashboard/StockPrice';
import AdminHeader from "../components/dashboard/AdminHeader";
import { makeStyles } from "@material-ui/core/styles";


function AdminLayout(props) {
    
  return (
    <div >
      <React.Fragment>
        <AdminHeader />
        <Switch>
          <Route path={props.match.path + "/manage"} exact component={Manage} />
          <Route path={props.match.path + "/stock"} exact component={StockPrice} />
          <Route path={props.match.path + "/orders"} exact component={Orders} />
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default AdminLayout;
