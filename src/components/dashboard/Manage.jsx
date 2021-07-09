
import withLoading from "../../HOC/withLoading";
import React, { useState ,useContext} from "react";
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
import { ModalContext } from '../../context/modalContext'
import AddProductModal from "../AddProductModal";


const theme = createMuiTheme({
  direction: "rtl",
});

const columns = [
  {
    id: "image",
    label: "تصویر",
    minWidth: 170,
    align: "right",
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
    align: "tight",
  },
  {
    id: "edit",
    label: "ادیت",
    minWidth: 170,
    align: "tight",
  },
];

const useStyles = makeStyles({
  root: {
    width: "80%",
    padding: "auto",
    margin: " auto",
    marginTop:"20px"
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
  const {handleModal} = useContext(ModalContext)
  let history = useHistory();

  const fetchTask = async (id) => {
    try {
      const response = await fetch(
        `https://60b4f1e8fe923b0017c8338d.mockapi.io/user/${id}`
      );
      const data = await response.json();
      console.log(response);
      history.push(`/user/${id}`);
      return data;
    } catch (err) {
      //   toast.error("request failed!");
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//   const handleUser = (e) => {
//     console.log(e.target.id);
//     fetchTask(e.target.id);
//   };

  
    const handleClick=()=>{
        handleModal(<AddProductModal/> );
    }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        dir="rtl"
        className={classes.root}
      >
        <Grid item xs={9}>
          <Typography variant="h6" >
            مدیریت کالاها
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleClick}>
            افزودن کالا
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.root}>
        <Paper >
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((datas) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={datas.code}
                      >
                        {columns.map((column) => {
                          const value = datas[column.id];
                          return (
                            <TableCell
                              id={datas.id}
                              key={column.id}
                              align={column.align}
                            >
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default withLoading(Manage, "https://fakestoreapi.com/products");
