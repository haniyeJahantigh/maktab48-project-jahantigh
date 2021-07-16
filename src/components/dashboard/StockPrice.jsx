// import withLoading from "../../HOC/withLoading";
// import React, { useState, useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import { TableContainer, MenuItem } from "@material-ui/core";
// import TableHead from "@material-ui/core/TableHead";
// import { Typography, Grid } from "@material-ui/core";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import { useHistory } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Container from "@material-ui/core/Container";

// const theme = createMuiTheme({
//   direction: "rtl",
// });

// const columns = [
//   {
//     id: "title",
//     label: "نام کالا",
//     minWidth: 170,
//     align: "right",
//   },
//   {
//     id: "price",
//     label: " قیمت",
//     minWidth: 170,
//     align: "right",
//   },
//   {
//     id: "stock",
//     label: " موجودی",
//     minWidth: 100,
//     align: "right",
//     format: "edit",
//   },
// ];

// const useStyles = makeStyles({
//   root: {
//     width: "80%",
//     padding: "auto",
//     margin: " auto",
//     marginTop: "20px",
//   },
//   image: {
//     width: theme.spacing(15),
//     height: theme.spacing(20),
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// function StockPrice({ data, ...props }) {
//   const classes = useStyles();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [open, setOpen] = React.useState(false);
//   const [openEdit, setOpenEdit] = React.useState(false);
//   const [product, setProduct] = React.useState();
//   const [products, setProducts] = React.useState([]);

//   let history = useHistory();

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleClick = () => {
//     setOpen(true);
//   };
  
//   const addProduct = async (product) => {
//     try {
//       const res = await fetch("http://localhost:8000/products", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });
//       const data = await res.json();
//       console.log("data=",data);
//       console.log("res=",res);
//       setProducts([...products, data]);
//       // return res;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleDelet =async (proId) => {
//     await fetch(`http://localhost:5000/tasks/${proId}` ,{
//       method: "DELETE"
//     })
//    console.log(proId);
//    setProducts(products.filter((product) => product.id !== proId));
//    // or .then((res)=> setTasks(tasks.filter((task) => task.id !== taskId)))
//  };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="md">
//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           dir="rtl"
//           className={classes.root}
//         >
//           <Grid item xs={9}>
//             <Typography variant="h6">مدیریت موجودی و قیمت‌ها</Typography>
//           </Grid>

//           <Grid item xs={3}>
//             <Button
//               variant="contained"
//               color="primary"
//               href="#contained-buttons"
//               onClick={handleClick}
//             >
//                ذخیره
//             </Button>
//           </Grid>
          
//           <Grid item xs={12} className={classes.root}>
//             <Paper>
//               <TableContainer className={classes.container} dir="rtl">
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                     <TableRow>
//                       {columns.map((column) => (
//                         <TableCell
//                           key={column.id}
//                           align={column.align}
//                           style={{ minWidth: column.minWidth }}
//                         >
//                           {column.label}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {data
//                       .slice(
//                         page * rowsPerPage,
//                         page * rowsPerPage + rowsPerPage
//                       )
//                       .map((datas) => {
//                         return (
//                           <TableRow
//                             hover
//                             role="checkbox"
//                             tabIndex={-1}
//                             key={datas.code}
                            
//                           >
//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               {datas.title}
//                             </TableCell>
//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               {datas.price}
//                             </TableCell>
//                             <TableCell
//                               id={datas.id}
//                               key={datas.id}
//                               align="right"
//                             >
//                               {datas.stock}
//                             </TableCell>
                           
//                           </TableRow>
//                         );
//                       })}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 rowsPerPageOptions={[10, 25, 100]}
//                 component="div"
//                 direction="ltr"
//                 count={data.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//               />
//               <EditModal
//                 openEdit={openEdit}
//                 setOpenEdit={setOpenEdit}
//                 setProduct={setProduct}
//                 product={product}
//               />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default withLoading(StockPrice, "http://localhost:8000/products");


import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import withLoading from "../../HOC/withLoading"; 

const theme = createMuiTheme({
  direction: "rtl",
});
const columns = [
  {
    field: 'title',
    headerName: 'نام کالا',
    width: 350,
    alighn:"right"
  },
  {
    field: 'price',
    headerName: 'قیمت',
    width: 150,
    type: 'number',
    editable: true,
    alighn:"right"
  },
  {
    field: 'stock',
    headerName: 'موجودی',
    type: 'number',
    width: 110,
    editable: true,
    alighn:"right"
  }
];


function StockPrice({data}) {

  return (
    <ThemeProvider theme={theme}>
    <div style={{ height: 400, width: '100%' }} dir="rtl">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        dir="rtl"
        disableSelectionOnClick
      />
    </div>
    </ThemeProvider>
  );
}

export default withLoading(StockPrice, "http://localhost:8000/products");