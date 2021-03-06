import withLoading from "../../HOC/withLoading";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  TableContainer,
  Typography,
  Table,
  Grid,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Container,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { removeCart } from "../../redux/actions/cardAction";
import { useDispatch, useSelector } from "react-redux";
import NotInterestedIcon from "@material-ui/icons/NotInterested";

const theme = createMuiTheme({
  direction: "rtl",
});

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
  toppading: {
    marginTop: "20px",
  },
  empty: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "150px",
    borderRadius: "5px",
    boxShadow: "2px 1px 5px gray",
    direction: "rtl",
    padding: "2rem",
    backgroundColor: "#fff",
  },
  footer: {
    paddingTop: "30px",
    direction: "row",
  },
  icon: {
    color: "red",
    fontSize: "5rem",
    width: "100%",
  },
  btn: {
    width: "100%",
    textAlign:"center",
    textDecoration:"none"
  },
});

export default function CardShopping({ data, ...props }) {
  const classes = useStyles();

  const cartItems = useSelector((state) => state.cartItem);

  const productSum = cartItems?.map((item) => item.price * item.number);
  // console.log(productSum);
  const total =
    productSum.length > 0 ? productSum.reduce((sum, item) => (sum += item)) : 0;
  const dispatch = useDispatch();

  let history = useHistory();
  const handleGoToFinal = () => {
    history.push("/finalCard");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {cartItems.length > 0 ? (
          <>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              dir="rtl"
              className={classes.root}
            >
              <Grid item xs={12}>
                <Typography variant="h6">?????? ????????</Typography>
              </Grid>
              <Grid item xs={12} className={classes.footer}>
                <Paper>
                  <TableContainer className={classes.container} dir="rtl">
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="right">????????</TableCell>
                          <TableCell align="right">????????</TableCell>
                          <TableCell align="right">??????????</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems.map((row, index) => {
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.index}
                            >
                              <TableCell id={row.id} key={row.id} align="right">
                                {row.title}
                              </TableCell>
                              <TableCell id={row.id} key={row.id} align="right">
                                {row.price}
                              </TableCell>
                              <TableCell id={row.id} key={row.id} align="right">
                                {row.number}
                              </TableCell>
                              <TableCell id={row.id} key={row.id} align="right">
                                <Button
                                  variant="contained"
                                  id={row.id}
                                  key={row.id}
                                  color="primary"
                                  href="#contained-buttons"
                                  onClick={() => {
                                    dispatch(removeCart(index));
                                  }}
                                >
                                  ??????
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              <Grid container className={classes.footer}>
                <Grid item xs={9}>
                  <Typography variant="h6">
                    ?????? : {total.toLocaleString()} ??????????
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                    onClick={handleGoToFinal}
                  >
                    ?????????? ???????? ?????? ????????
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.empty}>
              <NotInterestedIcon className={classes.icon} />
              <br />
              ???????????? ?????? ???????? ??????
              <Link to="/"
                className={classes.btn}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.btn}
                >
                  ???????????? ???? ??????????????
                </Button>
              </Link>
            </Typography>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}
// export default withLoading(CardShopping, "http://localhost:8000/orders");
