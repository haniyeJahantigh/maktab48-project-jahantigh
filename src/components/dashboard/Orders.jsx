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

const theme = createMuiTheme({
  direction: "rtl",
});

const columns = [
  {
    id: "user",
    label: "نام کاربر",
    minWidth: 170,
    align: "right",
    format: "img",
  },
  {
    id: "total",
    label: " مجموع مبلغ",
    minWidth: 170,
    align: "right",
  },
  {
    id: "orderDate",
    label: " زمان ثبت سفارش",
    minWidth: 170,
    align: "right",
  },
  {
    id: "check",
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
    marginTop: "20px",
  },
  image: {
    width: theme.spacing(15),
    height: theme.spacing(20),
  },
  container: {
    maxHeight: 440,
  },
});

function Orders({ data, ...props }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState();
  const [value, setValue] = React.useState("recived");
  const [filterData, setFilterData] = React.useState();

  const recivedOrders= data?.filter((order) => order.recived == true);
  const waitingOrders= data?.filter((order) => order.recived == false)
  const handleChange = async(event) => {
    // console.log(event.target);
   setValue(event.target.value);
  };
  let datas = value === "recived" ? recivedOrders : waitingOrders;
//   if (value === "unrecived") {
//    setFilterData(data?.filter((order) => order.recived == true));
//    console.log(filterData);
//  } else {
//    setFilterData(data?.filter((order) => order.recived == false));
//  }

  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const fetchOrder = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/orders/${id}`);
  //     const data = await response.json();
  //     return data;
  //     console.log(data);
  //   } catch (err) {
  //     console.error("request failed!");
  //   }
  // };
  const handleClick = (e) => {
    setOpen(true);
    // fetchOrder(e);
    console.log(e);
    // const id = e.target.id;
    // setProduct(data.find((item) => item.id === +id));
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
          <Grid item xs={6}>
            <Typography variant="h6">مدیریت سفارش‌ها</Typography>
          </Grid>
          <Grid item xs={6}>
            <RadioGroup row value={value} onChange={handleChange}>
              <FormControlLabel
                value="recived"
                control={<Radio />}
                label="سفارش‌های تحویل شده"
              />
              <FormControlLabel
                value="unrecived"
                control={<Radio />}
                label="سفارش‌های در انتظار ارسال"
              />
            </RadioGroup>
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
                    {datas ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      ).map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row?.code}
                          >
                            <TableCell
                              id={row.id}
                              key={row.id}
                              align="right"
                            >
                              {row.userName}
                            </TableCell>
                            <TableCell
                              id={row.id}
                              key={row.id}
                              align="right"
                            >
                              {row.total}
                            </TableCell>
                            <TableCell
                              id={row.id}
                              key={row.id}
                              align="right"
                            >
                              {row?.orderDate}
                            </TableCell>
                            <TableCell
                              id={row.id}
                              key={row.id}
                              align="right"
                            >
                              <Button
                                variant="contained"
                                id={row.id}
                                key={row.id}
                                color="primary"
                                href="#contained-buttons"
                                onClick={(e)=>handleClick(row.id)}
                              >
                                بررسی سفارش
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

export default withLoading(Orders, "http://localhost:8000/orders");
