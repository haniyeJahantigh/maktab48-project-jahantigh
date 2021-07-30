import withLoading from "../../HOC/withLoading";
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer, MenuItem } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import { Typography, Grid } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import OrderModal from "../../modals/OrderModal";
import Container from "@material-ui/core/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


const theme = createMuiTheme({
  direction: "rtl",
});

const columns = [
  {
    id: "product",
    label: "نام کالا",
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
  },
  {
    id: "delet",
    minWidth: 100,
    align: "right",
    format: "edit",
  },
];

const useStyles = makeStyles({
  root: {
    width: "90%",
    padding: "auto",
    margin: " auto",
    marginTop: "100px",
  },
  image: {
    width: theme.spacing(15),
    height: theme.spacing(20),
  },
  container: {
    maxHeight: 440,
  },
  toppading:{
      marginTop:"20px"
  }
});

function CardShopping({ data, ...props }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState();
  const [value, setValue] = React.useState("recived");
  const [filterData, setFilterData] = React.useState();

  const cartItems = useSelector((state) => state.cartItems)
  const productSum = cartItems?.map(item => item.price * item.number)
  const total =productSum.length>0 ? productSum.reduce((sum, item) => (sum += item)) :0
  const dispatch = useDispatch()

  
  
  //   const totalPrice = subtotal(data.products)
  const totalPrice = () => {
    const item = data.products;
    console.log(data.products);
    return item.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };
//********************* pagination ********************************* */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
//********************* delete order ********************************* */
  const handleDelet =async (proId) => {
    // const res= await fetch(`http://localhost:8000/products/${proId}` ,{
    //    method: "DELETE"
    //  })
    //  .then((res)=> setData(data.filter((product) => product.id !== proId)))
    console.log(proId);
   
  };

  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          dir="rtl"
          className={classes.root}
        >
          <Grid item xs={12}>
            <Typography variant="h6">سبد خرید</Typography>
          </Grid>
          <Grid item xs={12} className={classes.root}>
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
                    {filterData
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((datas) => {
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
                              {datas.stock}
                            </TableCell>
                            <TableCell
                              id={datas.id}
                              key={datas.id}
                              align="right"
                            >
                              <Button
                                variant="contained"
                                id={datas.id}
                                key={datas.id}
                                color="primary"
                                href="#contained-buttons"
                                onClick={(e)=>handleDelet(datas.id)}
                              >
                                حذف
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                direction="ltr"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
          
          <Grid item xs={9}>
             <Typography variant="h6">جمع: {totalPrice}</Typography>
          </Grid>
         
          
          <Grid item xs={3}>
           <Button
             variant="contained"
             // id={datas.id}
             // key={datas.id}
             color="primary"
             href="#contained-buttons"
             // onClick={(e)=>handleDelet(datas.id)}
           >
              نهایی کردن سبد خرید
           </Button>
          </Grid>
         
        </Grid>   
          <OrderModal
            open={open}
            setOpen={setOpen}
            setProduct={setProduct}
            product={product}
          />
      </Container>
    </ThemeProvider>
  );
}

export default withLoading(CardShopping, "http://localhost:8000/orders");
