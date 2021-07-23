import withLoading from "../../HOC/withLoading";
import React, { useState, useContext,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LimitProduct from "./LimitProduct";
;

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
//   container: {
//     maxHeight: 440,
//   },
});

function Main({ data,setData, ...props}) {
  const classes = useStyles();
  
  
  return (
    <ThemeProvider theme={theme}>
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
