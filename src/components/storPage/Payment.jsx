import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder, getOrders } from "../../redux/actions/orderAction"
import { clearCart } from "../../redux/actions/cardAction"
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import dargah from "../../accets/imgs/dargah.png"
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
    container:{
        margin:"30px auto"
    },
    img: {
        objectFit: "contain",
        objectPosition: "center",
        height: "100%",
        width: "100%",
    },
    box: {
        height: "100%",
        width: "100%",
        margin: "auto"
    },
    btn:{
        padding: "5px 15px",
        margin:"0 20px",
    },
    btnGrup:{

    }
  });
const Payment = () => {
    const classes = useStyles();
    const newOrder = useSelector((state) => state.allOrders.newOrder)
    const orders = useSelector((state) => state.allOrders.orders)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    let history = useHistory()
    const handleSuccess = () => {
        dispatch(addNewOrder(newOrder))
        dispatch(clearCart())
        history.push('/success/orders.length+1')
    }
    const handleFailed = () => {
        history.push('/failed')
    }
    return (
        <>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box className={classes.box}><img className={classes.img} src={dargah} alt="درگاه بانکی" /></Box>
                    </Grid>
                </Grid>
                <Grid container xs={12} className={classes.btnGrup} direction="row" justifyContent="center"  alignItems="center" >
                      <Grid item xs={6}>
                        <Button onClick={handleSuccess} color='primary' variant="contained" className={classes.btn} >پرداخت </Button>
                       </Grid>
                       <Grid item xs={6}>
                        <Button onClick={handleFailed} color='warning' variant="contained" className={classes.btn}>انصراف </Button>
                       </Grid>
                </Grid>
                
                
            </Container>
        </>
    )
}

export default Payment