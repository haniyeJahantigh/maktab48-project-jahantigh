import React, { useState, useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { addToCart } from '../../redux/actions/cardAction';
import { getAProduct } from "../../redux/actions/productAction";


const theme = createMuiTheme({
  direction: "rtl",
});
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    width: "80%",
    position: "relative",
    paddingRight:"50px",
    marginTop: "100px",
    flexGrow: 1,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      marginTop: "20px",
    },
  },
  number: {
    width: "70px",
    marginRight: "20px",
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(30),
    marginTop: "50px",
    marginRight: "50px",
  },
  descrip:{
    marginRight: "20px",
    marginLeft: "10px",
    textAlign:"justify"
  }
}));

const Product = () => {
  const classes = useStyles();
  const { id } = useParams();
  let history = useHistory();
 const dispatch = useDispatch()
 const productData = useSelector((state) => state.allProduct.selectedProduct);
 const [num, setNum] = useState(1)

  useEffect(() => {
    dispatch(getAProduct(id));
  }, []);

  const handleAddProductForBuy = () => {
    console.log("added to card shopping");
    let cartItem = { title: productData.title, price: Number(productData.price), number: Number(num) }
    console.log(cartItem);
     dispatch(addToCart(cartItem))
  };


  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper className={classes.mainFeaturedPost} dir="rtl">
          <Grid container>
            <Grid item xs={12} md={4}>
              {
                <img
                  src={productData?.image}
                  alt={productData?.title}
                  className={classes.image}
                />
              }
            </Grid>
            <div className={classes.mainFeaturedPostContent}>
              <Grid item xs={12} md={8}>
                <Typography
                  component="h2"
                  variant="h4"
                  color="inherit"
                >
                  {productData?.title}
                </Typography>
              </Grid>
              
              <Typography variant="h6" color="inherit" paragraph>
                دسته بندی: {productData?.category}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                قیمت : {productData?.price}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                موجودی: {productData?.stock}
              </Typography>
              
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddProductForBuy}
                disabled={productData?.stock === "0"}
              >
                افزودن به سبد خرید
              </Button>
              <TextField
                id="outlined-basic"
                label="تعداد"
                onChange={e => setNum(e.target.value)}
                value={num}
                variant="outlined"
                type="number"
                defaultValue="1"
                className={classes.number}
                // onkeydown={(e) => {
                //   e.preventDefault();
                // }}
                // onKeyPress={(e) => {
                //   e.preventDefault();
                // }}
                size="small"
              />
              {productData?.stock === "0" ? <Typography style={{ color: "red" }}>اتمام موجودی</Typography> : null}
             
            </div>
          
          <Grid item xs={12} md={12}>
            <Typography variant="h6" color="inherit" paragraph className={classes.descrip}>
              {productData?.description}
            </Typography>
          </Grid>
          </Grid>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default Product;
