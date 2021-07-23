import withLoading from "../../HOC/withLoading";
import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles({
  root: {
    width: "80%",
    padding: "auto",
    margin: " auto",
    marginTop: "20px",
    border: "1px solid",
  },
  image: {
    width: theme.spacing(15),
    height: theme.spacing(20),
  },
  container: {
    maxHeight: 440,
  },
});

const LimitProduct = ({ data,setData }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className={classes.root}>
        {data.map((pro) => {
          return (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              dir="rtl"
              className={classes.root}
            >
              <Grid item xs={12}>
                <Typography variant="h6">{pro.category}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={pro.image}
                      title="products"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {pro.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {pro.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </ThemeProvider>
  );
};

export default withLoading(
  LimitProduct,
  "http://localhost:8000/products?limit=6"
);
