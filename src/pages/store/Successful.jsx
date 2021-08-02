import React, { useEffect, useState } from 'react'
import {  useHistory } from "react-router-dom"
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import successful from "../../accets/imgs/Hands - Heart.png"
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
    container:{
        marginTop:"100px"
    },
    img: {
        objectFit: "contain",
        objectPosition:"right",
        height: "60%",
        width: "60%",
        margin:"auto",
        alignItems:"center"
    },
    box: {
        height: "60%",
        width: "60%",
        alignItems:"center",
        margin:"auto"
    },
    title:{
        textAlign:"right"
    }
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
                <Grid container spacing={0} alignItems="center" direction="row-reverse" justifyContent="center" >
                    <Grid item xs={12} sm={6}>
                         <img className={classes.img} src={successful} alt="پرداخت موفق"  />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.title}>
                    <Typography variant="h6"  >
                        با تشکر از خرید شما،
                        پرداخت با موفقیت انجام شد
                     </Typography>
                        <Button onClick={handleGoToHome} color="primary"  variant="contained" > بازگشت به سایت </Button>
                    </Grid>
                </Grid>
                
            </Container>
        </>
    )
}

export default Successful