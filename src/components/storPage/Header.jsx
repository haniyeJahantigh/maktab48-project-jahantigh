import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useSelector } from 'react-redux';


const theme = createMuiTheme({
  direction: "rtl",
});
const drawerWidth = 140;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    cursor:"pointer"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  badge:{
    background:"#ffea00",
    color:"black"
  }
}));

const Header = ({open,setOpen}) => {
  const classes = useStyles();
  let history = useHistory();
  const cartItems = useSelector((state) => state.cartItem)

  
  const handleUser = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  const handleShopping = (e) => {
    e.preventDefault();
    history.push("/cardSopping");
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleMain=(e)=>{
    e.preventDefault();
    history.push("/");
    console.log("main");
  }  
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)} dir="rtl">
          <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" className={classes.title} onClick={handleMain} >
              فروشگاه
            </Typography>

            <Button color="inherit" onClick={handleUser}>
              <IconButton
                aria-label="account of current user"
                aria-haspopup="false"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              مدیریت
            </Button>
            <Button color="inherit" onClick={handleShopping}>
                <IconButton
                  aria-label="cart"
                  aria-haspopup="false"
                  color="inherit"
                >
                  <Badge badgeContent={cartItems.length}  color="error">
                  <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                 سبد خرید
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Header;
