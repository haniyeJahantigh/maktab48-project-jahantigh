import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import withLoading from "../../HOC/withLoading";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {updateProduct} from "../../api/productApi"

const theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles({
  root: {
    width: "80%",
    padding: "auto",
    margin: " auto",
    marginTop: "20px",
  },
  container: {
    maxHeight: 440,
  },
  rightMode:{
      textAlign:"right",

      
  }
});

const columns = [
  {
    field: "title",
    headerName: "نام کالا",
    width: 450,
    alighn: "right",
  },
  {
    field: "price",
    headerName: "قیمت",
    width: 150,
    editable: true,
    alighn: "left",
  },
  {
    field: "stock",
    headerName: "موجودی",
    width: 150,
    editable: true,
    alighn: "right",
  },
];

function StockPrice({ data }) {
  
  const classes = useStyles();
  const [newDatas,setNewDatas]=useState([])

  const handleClick= () => {
    // console.log("zakhire");
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
    //       setNewDatas([...newDatas, data]);
    //     } catch (err) {
    //       console.log(err);
        
    //   };
      Promise.all(newDatas.map(product => updateProduct(product.id, product)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    ))
  }

  const handleEditCellChange = ({ id, field, props }) => {

    let updatedObj = { field, value: props.value }
    // console.log(updatedObj);
    let obj = data.filter((item) => item.id === id)

    if (updatedObj.field === "stock") {

      obj[0].stock = updatedObj.value

    } else {
      obj[0].price = updatedObj.value
    }

    setNewDatas([...newDatas, ...obj])

  }
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: "70%" }} className={classes.root} dir="rtl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          dir="rtl"
        >
          <Grid item xs={9}>
            <Typography variant="h6">مدیریت موجودی و قیمت‌ها</Typography>
          </Grid>

          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              onClick={handleClick}
              disabled={newDatas.length === 0}
            >
              ذخیره
            </Button>
          </Grid>
        
          </Grid>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          className={classes.rightMode}
          // disableSelectionOnClick
          showCellRightBorder
          MuiDataGrid-cell--textLeft ={false}
          hideFooterSelectedRowCount={true}
          onEditCellChangeCommitted={handleEditCellChange}
        />
      </div>
    </ThemeProvider>
  );
}

export default withLoading(StockPrice, "http://localhost:8000/products");
