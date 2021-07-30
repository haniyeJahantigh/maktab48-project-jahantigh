import {Switch, Route } from "react-router-dom";
import React from "react";
import Header from "../components/storPage/Header";
import SideBar from "../components/storPage/ListItem";
import Main from '../components/storPage/Main'
import MenPro from '../components/storPage/MenPro'
import WomenPro from '../components/storPage/WomenPro'
import Accesory from '../components/storPage/Accesory'
import Product from '../components/storPage/Product'
import CardShopping from "../components/storPage/CardShopping";


function MainPage(props) {
    const [open, setOpen] = React.useState(false);
    
  return (
    <div >
      <React.Fragment>
        <Header open={open} setOpen={setOpen} />
        <SideBar open={open} setOpen={setOpen}/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/MensProduct" exact component={MenPro} />
          <Route path="/WomensProduct" exact component={WomenPro} />
          <Route path="/accesorys" exact component={Accesory} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/cardSopping" exact component={CardShopping} />
        </Switch>
      </React.Fragment>
    </div>
  );
}


export default MainPage;
