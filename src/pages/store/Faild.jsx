import React, { useEffect, useState } from 'react'
import {  useHistory } from "react-router-dom"
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import failed from "../../accets/imgs/unsuc2.png"
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
    title:{
        textAlign:"center"
    }
  });
const Faild = () => {
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
                        <Box className={classes.box}><img className={classes.img} src={failed} alt=" پرداخت ناموفق" /></Box>
                    </Grid>
                    <Grid  xs={12} md={6} alignItems="center" className={classes.title}>
                    <Typography variant="h6">
                        پرداخت ناموفق! سفارش شما در حال انتظار است 
                     </Typography>
                        <Button onClick={handleGoToHome} color="primary" variant="contained">بازگشت به سایت </Button>
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}

export default Faild