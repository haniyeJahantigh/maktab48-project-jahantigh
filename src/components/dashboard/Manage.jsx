import withLoading from "../../HOC/withLoading";
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { Typography, Grid } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "../Modal";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import EditModal from '../EditModal'
import AddModal from "./AddModal";

const theme = createMuiTheme({
  direction: "rtl",
});

const columns = [
  {
    id: "image",
    label: "تصویر",
    minWidth: 170,
    align: "right",
    format: "img",
  },
  {
    id: "title",
    label: "نام کالا",
    minWidth: 170,
    align: "right",
  },
  {
    id: "category",
    label: "دسته بندی",
    minWidth: 170,
    align: "right",
  },
  {
    id: "edit",
    minWidth: 100,
    align: "right",
    format: "edit",
  },
];

const useStyles = makeStyles({
  root: {
    width: "80%",
    padding: "auto",
    margin: " auto",
    marginTop: "20px",
  },
  image:{
    width: theme.spacing(15),
    height: theme.spacing(20),

  },
  container: {
    maxHeight: 440,
  },
});

/*
 * Fetch a single user by Id
 */

function Manage({ data, ...props }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [product,setProduct]=React.useState();


  let history = useHistory();

  // const fetchTask = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `https://60b4f1e8fe923b0017c8338d.mockapi.io/user/${id}`
  //     );
  //     const data = await response.json();
  //     console.log(response);
  //     history.push(`/user/${id}`);
  //     return data;
  //   } catch (err) {
  //    alert(err);
  //   }
  // };

  //   const handleUser = (e) => {
  //     console.log(e.target.id);
  //     fetchTask(e.target.id);
  //   };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleEditModal=(e)=>{
    setOpenEdit(true);
    console.log(e.target.id);
    const id= e.target.id
    setProduct(data.find(item=>item.id === +id))  
  }

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
          <Grid item xs={9}>
            <Typography variant="h6">مدیریت کالاها</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              onClick={handleClick}
            >
              افزودن کالا
            </Button>
          </Grid>
          {/* <AddModal open={open} setOpen={setOpen}/> */}
          <Modal open={open} setOpen={setOpen}/>
            
         
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
                    {data
                      .slice(
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
                              <Avatar src={datas.image} variant="square" className={classes.image}/>
                            </TableCell>

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
                              {datas.category}
                            </TableCell>
                            <TableCell
                              id={datas.id}
                              key={datas.id}
                              align="right"
                            >
                              <EditIcon onClick={handleEditModal} id={datas.id}/>
                              <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} setProduct={setProduct} product={product}/>
                              <DeleteIcon />
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
      </Container>
    </ThemeProvider>
  );
}

export default withLoading(Manage, "https://fakestoreapi.com/products");
