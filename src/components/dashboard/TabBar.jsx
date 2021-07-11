import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {  useHistory } from "react-router-dom";



const theme = createMuiTheme({
    direction: "rtl",
  });
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleManage=(e)=>{
    e.preventDefault();
    history.push("/dashboard/manage");
    console.log("manage");
  }
  const handleStock=(e)=>{
    e.preventDefault();
    history.push("/dashboard/stock");
  }
  const handleOrder=(e)=>{
    e.preventDefault();
    history.push("/dashboard/orders");
  }
  return (
    <ThemeProvider theme={theme}>
    <Paper className={classes.root} dir='rtl'>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="کالاها" onClick={handleManage}/>
        <Tab label="موجودی وقیمت" onClick={handleStock}/>
        <Tab label="سفارش ها" onClick={handleOrder}/>
      </Tabs>
    </Paper>
    </ThemeProvider>
  );
}
