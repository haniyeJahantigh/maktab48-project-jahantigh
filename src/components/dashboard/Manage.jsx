// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import {Button} from '@material-ui/core'
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


// const theme = createMuiTheme({
//     direction: "rtl",
//   });
// const columns = [
//   { field: 'id', headerName: 'شماره', width: 150 },
//   {
//     field: 'ProductImg',
//     headerName: 'تصویر',
//     width: 150,
//     // editable: true,
//   },
//   {
//     field: 'ProductName',
//     headerName: 'نام کالا',
//     type:'string',
//     width: 250,
//     editable: true,
//   },
//   {
//     field: 'category',
//     headerName: 'دسته بندی',
//     width: 250,
//     editable: true,
//   },
//   {
//     field: 'edit',
//     headerName: '',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,

//   },
// ];

// const rows = [
//   { id: 1, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 2, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 3, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10},
//   { id: 4, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 5, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 6, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 7, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 8, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
//   { id: 9, ProductName: 'کالا', price: 1000, category: 'لبنیات',number:10 },
// ];

// export default function Manage() {
//   const [dataRow,setDataRow]=React.useState(null)
//   const handleDelete=()=>{
//     console.log(dataRow);
//   }
//   return (
//     <ThemeProvider theme={theme}>
//     <div style={{ height: 400, width: '70%' }}>
//       <Button variant="contained" color="secondary" onClick={handleDelete}>
//         X
//       </Button>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         direction="rtl"
//         disableSelectionOnClick
//         onRowSelected={(e)=>{setDataRow(e.data.id)}}
//       />
//     </div>
//     </ThemeProvider>
//   );
// }

import withLoading from "../../HOC/withLoading";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import {useHistory} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


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
    margin: " auto"
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
  let history = useHistory()

  const fetchTask = async (id) => {
    try {
      const response = await fetch(
        `https://60b4f1e8fe923b0017c8338d.mockapi.io/user/${id}`
      );
      const data = await response.json(); 
      console.log(response);
      history.push(`/user/${id}`)
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

  const handleUser = (e) => {
    console.log(e.target.id);
    fetchTask(e.target.id);
  };

  return (
    <ThemeProvider theme={theme}>
    <Paper className={classes.root}>
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
                        <TableCell id={datas.id} key={column.id} align={column.align}>
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
    </ThemeProvider>
  );
}

export default withLoading(
  Manage,
  "https://fakestoreapi.com/products"
);
