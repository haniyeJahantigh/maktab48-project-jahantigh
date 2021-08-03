import React, { useState, useContext, useEffect } from "react";
import { makeStyles ,createTheme} from "@material-ui/core/styles";
import withLoading from "../../HOC/withLoading";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const theme = createMuiTheme({
  direction: "rtl",
  // palette: {
  //     secondary: "#ffeb3b",
  //   },
  
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

function CardProduct({ data, categoryLimit }) {
  const classes = useStyles();
  const history = useHistory();
  

  function handleGoToProductPage (e) {
    history.push(`/product/${e}`);
    console.log("product clicked");
  };

  const LimitData = data?.filter(
    (product) => product.category === categoryLimit
  );
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
          {LimitData?.map((pro) => {
            return (
              <Grid
                item
                justifyContent="space-between"
                alignItems="center"
                xs={12}
                sm={6}
                md={4}
              >
                <div>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={pro.image}
                        title="products"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">
                          {pro.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          قیمت: {pro.price} تومان
                        </Typography>

                        <Button
                        className={classes.button}
                          variant="contained"
                          onClick={()=>handleGoToProductPage(pro.id)}
                          fullWidth
                        >
                          بیشتر
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default withLoading(CardProduct, "http://localhost:8000/products");
