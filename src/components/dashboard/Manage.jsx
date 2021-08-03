import withLoading from "../../HOC/withLoading";
import React, { useState, useContext,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
import Modal from "../../modals/Modal";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import EditModal from "../../modals/EditModal";
import AddModal from "./AddModal";
import { ArrowDropDown } from "@material-ui/icons";

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
  image: {
    width: theme.spacing(15),
    height: theme.spacing(20),
  },
  container: {
    maxHeight: 440,
  },
});

function Manage({ data,setData, ...props}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [product, setProduct] = React.useState();
  const [editedObj, setEditedObj] = useState(null);

  const [filterData,setFilterData]=useState()


  //pagination   ***************************************************************
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  //open modal for add new product ***************************************************************
  const handleClick = () => {
    setOpen(true);
  };

  //edit product ***************************************************************
  function handleEditModal(e) {
    setOpenEdit(true);
    console.log(e);
    // setEditedObj(obj)
    setFilterData(data?.find(item=>item.id === e))
    console.log(filterData);
  }

  //add a new product ***************************************************************
  const addProduct = async (product) => {
    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const newData = await res.json();
      setData([...data, newData]);
    } catch (err) {
      console.log(err);
    }
  };

    //delete a product ***************************************************************
  const handleDelet =async (proId) => {
   const res= await fetch(`http://localhost:8000/products/${proId}` ,{
      method: "DELETE"
    })
    .then((res)=> setData(data.filter((product) => product.id !== proId)))
   console.log(proId);
  //  const filterData=await data.filter((product) => product.id !== proId)
  //  setData(filterData);
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

          <Modal open={open} setOpen={setOpen} add={addProduct} />

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
                      ?.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      ?.map((datas) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={datas.code}
                            id={datas.id}
                          >
                            <TableCell
                              id={datas.id}
                              key={datas.id}
                              align="right"
                            >
                              <Avatar
                                src={datas.image}
                                variant="square"
                                className={classes.image}
                              />
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
                              <div onClick={(e) => handleEditModal(datas.id)} id={datas.id}>
                                <EditIcon  />
                              </div>

                              <div onClick={(e) => handleDelet(datas.id)} id={datas.id}>
                              <DeleteIcon />
                              </div>
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
              <EditModal
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
                filterData={filterData}
                // data={data}
                // setData={setData}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default withLoading(Manage, "http://localhost:8000/products");
