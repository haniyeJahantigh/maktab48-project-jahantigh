import React from "react";
import { Link, useHistory } from "react-router-dom";
import {Box,Grid,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position:"reletive"
    },
  }));
const NotFound = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <div >
      <Typography component="div" variant="body1">
        <Box color="secondary.main" className={classes.root}>
          <h1>404 Not Found </h1>
          <p>this page is not found...</p>
          <Link to="/">Go Home</Link>
        </Box>
      </Typography>
    </div>
    </Grid>
  );
};

export default NotFound;
