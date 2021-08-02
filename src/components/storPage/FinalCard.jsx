import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Grid, Container, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { setNewOrder } from "../../redux/actions/orderAction"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// import moment from "moment";
// import jMoment from "moment-jalaali";
// import JalaliUtils from "@date-io/jalaali";
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Redirect, useHistory } from "react-router-dom"
// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const theme = createMuiTheme({
    direction: "rtl",
  });
  
const useStyles = makeStyles({
    root: {
      width: theme.spacing(70),
      padding: "20px 10px",
      margin: " auto",
      marginTop: "100px",
      borderRadius:"5px",
    boxShadow:"2px 1px 5px gray",
    },
    image: {
      width: theme.spacing(15),
      height: theme.spacing(20),
    },
    container: {
      maxHeight: 440,
    },
    toppading: {
      marginTop: "20px",
    },
  });
export default function FinalCard() {
    const classes = useStyles();

    const cartItems = useSelector((state) => state.cartItem)
    const productSum = cartItems.map(item => item.price * item.number)
    const total = productSum.reduce((sum, item) => (sum += item))
    const dispatch = useDispatch();
    const history= useHistory()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);
    /*
     * 'use-date-picker' 
     */


    // const [selectedDate, handleDateChange] = useState(moment());


    const handleNewOrder = (e) => {
        e.preventDefault();
        const fullName = `${name}  ${lastName}`
        const orderTime = new Date().toLocaleDateString('fa-IR')
        const regex = RegExp(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        );
        if (name && lastName && address && phone ) {
            if (!regex.test(phone)) {
                toast.error("لطفا شماره تماس را  به درستی وارد کنید");
            } else {
                let newOrder = { userName: fullName, location: address, phone: phone, orderDate: orderTime, recDate: "jYYYY/jMM/jDD", products: cartItems, total: total, recived: false };
                dispatch(setNewOrder(newOrder))
                setShouldRedirect(true)
                  history.push(`/shaparak/payment`)
                console.log(newOrder);

                // dispatch(addNewProduct(newProduct))
                // handleClose();
            }


        } else {
            toast.error("لطفا تمام اطلاعات را وارد کنید");
            // console.error("err")
        }
    };


    return (
        <ThemeProvider theme={theme}>
    <div className={classes.root} dir="rtl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <Typography variant="h6">نهایی کردن سبد خرید</Typography>
          </Grid>
          <Grid item xs={12}>
            <form
            //   className={classes.root}
              noValidate
              autoComplete="off"
              dir="rtl"
              onSubmit={handleNewOrder}
            >
              <Grid container spacing={3} justify="flex-start">
                <Grid item xs={12} md={6}>
                  <TextField
                    style={{ width: "100%" }}
                    label="نام"
                    id="outlined-basic"
                    variant="outlined"
                    dir="rtl"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                    style={{ width: "100%" }}
                    label="نام خانوادگی"
                    id="outlined-basic"
                    name="lastName"
                    variant="outlined"
                    dir="rtl"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                    style={{ width: "100%" }}
                    label="آدرس"
                    id="outlined-basic"
                    multiline
                    variant="outlined"
                    dir="rtl"
                    required
                    rows={1}
                    rowsMax={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                    style={{ width: "100%" }}
                    label="تلفن همراه"
                    id="outlined-basic"
                    variant="outlined"
                    dir="rtl"
                    value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                    style={{ width: "100%" }}
                    label="تاریخ تحویل"
                    id="outlined-basic"
                    variant="outlined"
                    dir="rtl"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <Button
                style={{ width: "100%" }}
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  onClick={handleNewOrder}
                  disabled={!name && !lastName && !phone && !address}
                >
                  پرداخت
                </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
    </div>
        </ThemeProvider>
    );
}
