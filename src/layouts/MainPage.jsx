import {Switch, Route } from "react-router-dom";
import React from "react";
import Header from "../components/storPage/Header";
import SideBar from "../components/storPage/ListItem";


function MainPage(props) {
    const [open, setOpen] = React.useState(false);
  return (
    <div >
      <React.Fragment>
        <Header open={open} setOpen={setOpen}/>
        <SideBar open={open} setOpen={setOpen}/>
        <Switch>
          {/* <Route path={props.match.path + "/manage"} exact component={Manage} />
          <Route path={props.match.path + "/stock"} exact component={StockPrice} />
          <Route path={props.match.path + "/orders"} exact component={Orders} /> */}
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default MainPage;
