import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {useHistory } from "react-router-dom";
import TabBar from "./TabBar";


const theme = createMuiTheme({
    direction: "rtl",
  });
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

const AdminHeader = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleUser=(e)=>{
    e.preventDefault();
    history.push("/");
  }
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static" dir="rtl">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           پنل مدیریت فروشگاه
          </Typography>
          <TabBar/>
          <Button color="inherit" onClick={handleUser}>بازگشت به سایت</Button>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
};

export default AdminHeader;
