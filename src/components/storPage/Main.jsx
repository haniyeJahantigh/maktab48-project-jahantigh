import withLoading from "../../HOC/withLoading";
import React, { useState, useContext,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LimitProduct from "./LimitProduct";
import { ToastContainer, toast } from 'react-toastify';
import Slideshow from "./SlideShow";
import slide2 from '../../accets/imgs/slide2.jpeg'


const theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles({
  root: {
    width: "80%",
    padding: "auto",
    margin: " auto",
    marginTop: "20px",
  },
  image: {
    width: theme.spacing(15),
    height: theme.spacing(20),
  },
  slide:{
    width: "100%",
    alignItems:"center",
    justifyContent:"flex-start",
    padding:"0",
    height:"440px"
  },
  container: {
    maxHeight: 440,
  },
});

function Main({ data,setData, ...props}) {
  const classes = useStyles();
  
  
  return (
    <ThemeProvider theme={theme}>
        <ToastContainer />
        {/* <Slideshow/>    */}
        <div className="Slider"><img src={slide2} className={classes.slide} alt="slide"/></div>
      <Container maxWidth="md">
        <Typography variant="h6">{data.category}</Typography>
        <LimitProduct data={data} setData={setData} categoryLimit="لباس مردانه" classes={classes.container}/>
        <LimitProduct data={data} setData={setData} categoryLimit="لباس زنانه" classes={classes.container}/>
        <LimitProduct data={data} setData={setData} categoryLimit="کیف و کوله پشتی" classes={classes.container}/>
      </Container>
    </ThemeProvider>
  );
}

export default withLoading(Main, "http://localhost:8000/products");
