import React,{useState,useEffect} from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { Typography,Divider, Grid,Button,Modal,Backdrop,Fade,Container,Paper,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,} from "@material-ui/core";
import { createMuiTheme, ThemeProvider,makeStyles } from "@material-ui/core/styles";
import {useParams } from 'react-router-dom'
// import {addDatafetch} from '../api/addDatafetch'

const theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "5px"
  },
}));

const columns = [
    {
      id: "product",
      label: "کالا",
      minWidth: 170,
      align: "right",
    },
    {
      id: "price",
      label: " قیمت",
      minWidth: 170,
      align: "right",
    },
    {
      id: "number",
      label: " تعداد",
      minWidth: 170,
      align: "right",
    }
  ];


export default function OrderModal({ open, setOpen, props,product,setProduct }) {
  const classes = useStyles();
  const {id}=useParams()
  const [orderData,setOrderData]=useState(null);

  useEffect(() => {
    fetchOrder(id);
  }, [])

  const fetchOrder = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/orders/${id}`);
      const order = await response.json();
      setOrderData(order)
      if(response.status === 404){
          console.log("404 error");
      }
    } catch (err) {
      console.error("request failed!");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          dir="rtl"
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open} dir="rtl">
            <Container maxWidth="sm" dir="rtl">
              <div className={classes.paper}>
                <Grid container spacing={3}>
                  
                  <Grid item xs={9}>
                    <Typography> نمایش سفارش</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <CancelIcon onClick={handleClose} />
                  </Grid>
                  <Grid item xs={12}  maxWidth="lg">
                  <Typography> نام مشتری: </Typography>
                  
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                  <Typography> آدرس: </Typography>
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                  <Typography> تلفن: </Typography>
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                  <Typography> زمان تحویل: </Typography>
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                  <Typography> زمان سفارش: </Typography>
                  </Grid>

                  <Grid item xs={12} maxWidth="lg">
                    
                    {/* ******************************************* */}
                    <Paper>
              <TableContainer className={classes.container} dir="rtl">
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {orderData
                      ?.map((datas) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={datas.code}
                          >
                            <TableCell
                              id={datas.id}
                              key={datas.id}
                              align="right"
                            >
                              {datas.title}
                            </TableCell>
                            <TableCell
                              id={datas.id}
                              key={datas.id}
                              align="right"
                            >
                             {datas.price}
                            </TableCell>
                            <TableCell
                              id={datas.id}
                              key={datas.id}
                              align="right"
                            >
                              {datas.number}
                            </TableCell>
                          </TableRow>
                        );
                      })} */}
                  </TableBody>
                </Table>
              </TableContainer>

            </Paper>
                    {/* ******************************************* */}
                  </Grid>
                  
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography> زمان تحویل سغارش</Typography>
                    <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              // onClick={handleClick}
            >
              تحویل شد
            </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
