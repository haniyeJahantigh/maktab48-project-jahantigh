import React, { useEffect, useState } from 'react'
import {  useHistory } from "react-router-dom"
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import successful from "../../accets/imgs/Hands - Heart.png"
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
  });
const Successful = () => {
    const classes = useStyles();
    
    let history = useHistory()
    
    const handleGoToHome = () => {
        history.push('/')
    }
    return (
        <>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={8} alignItems="center">
                    <Grid xs={12} md={6}>
                        <Box className={classes.box}><img className={classes.img} src={successful} alt="پرداخت موفق" /></Box>
                    </Grid>
                    <Grid  xs={12} md={6}>
                    <Typography variant="h6">
                        با تشکر از خرید شما،
                        پرداخت با موفقیت انجام شد
                     </Typography>
                        <Button onClick={handleGoToHome} color='primary'>بازگشت به سایت </Button>
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}

export default Successful