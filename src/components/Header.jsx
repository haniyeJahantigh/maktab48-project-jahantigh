import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {useHistory } from "react-router-dom";


const theme = createMuiTheme({
    direction: "rtl",
  });
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleUser=(e)=>{
    e.preventDefault();
    history.push("/login");
  }
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static" dir="rtl">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           فروشگاه فلان
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          <Button color="inherit" onClick={handleUser}>ورود فروشنده</Button>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
};

export default Header;
