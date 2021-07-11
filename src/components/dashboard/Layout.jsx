import { Router, Switch, Route } from "react-router-dom";
import React from "react";
import Manage from './Manage';
import Orders from './Orders';
import StockPrice from './StockPrice';
import AdminHeader from "./AdminHeader";
import { makeStyles } from "@material-ui/core/styles";


function Layout(props) {
    
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


export default Layout;
