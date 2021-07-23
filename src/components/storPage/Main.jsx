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
  container: {
    maxHeight: 440,
  },
});

function Manage({ data,setData, ...props}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <LimitProduct data={data} setData={setData}/>
      </Container>
    </ThemeProvider>
  );
}

export default withLoading(Manage, "http://localhost:8000/products");
