import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import CardProduct from "./CardProduct";

const theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles({
  root: {
    // width: "90%",
    padding: "50px",
    marginTop: "50px",
    flexGrow: 1,
    backgroundColor:"#fff",
    borderRadius:"15px",
    boxShadow:"0 0 15px 0 lightgray"
  },
  container: {
    maxHeight: 440,
  },
  media: {
    width: theme.spacing(15),
    height: theme.spacing(20),
    margin:"auto",
    marginTop:"15px"
  },
  button:{
    background:"#ffea00",
    color:"black"
  }
});

const LimitProduct = ({ data, setData, categoryLimit }) => {
  const classes = useStyles();
  const history = useHistory();

  const LimitData = data?.filter(
    (product) => product.category === categoryLimit
  );

  const handleGoToProductPage = (e) => {
    history.push(`/product/${e}`);
    console.log(e);
    console.log("product clicked");
  };

  const SliceData = LimitData.slice(0, 6);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className={classes.root}>
        <Grid item xs={12} dir="rtl">
          <Typography variant="h4" component="h2">
            <ArrowLeftIcon color="primary" fontSize="large" />
            {categoryLimit}
          </Typography>
        </Grid>
        <Grid container dir="rtl" spacing={4}>
        {SliceData?.map((pro) => {
          return (
            <Grid
              item
            //   direction="row"
              justifyContent="space-between"
              alignItems="center"
              
              xs={12}
              sm={6}
              md={4}
            >
              <Card >
                <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={pro.image}
                      title="products"
                      
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h6" component="h6">
                          {pro.title}
                        </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        ????????: {pro.price} ??????????
                      </Typography>

                      <Button
                          variant="contained"
                          className={classes.button}
                          onClick={()=>handleGoToProductPage(pro.id)}
                          fullWidth
                          size='small'
                        >
                          ??????????
                        </Button>
                    </CardContent>
                </CardActionArea>
              </Card>
             </Grid>
          );
        })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LimitProduct;
