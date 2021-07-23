import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ListItemText,Drawer,IconButton} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import FaceIcon from '@material-ui/icons/Face';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import HomeIcon from '@material-ui/icons/Home';
import {  useHistory } from "react-router-dom";


const drawerWidth = 155;
const theme = createMuiTheme({
    direction: "rtl",
  });
  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      
})
)

const SideBar = ({open,setOpen})=>{
    const classes = useStyles();
    const handleDrawerClose = () => {
        setOpen(false);
      };
    const history=useHistory()
    const handleMen=(e)=>{
        e.preventDefault();
        history.push("/MensProduct");
        console.log("man");
      }  
    const handleWomen=(e)=>{
        e.preventDefault();
        history.push("/WomensProduct");
        console.log("woman");
      }  
    const handleAccesory=(e)=>{
        e.preventDefault();
        history.push("/accesorys");
        console.log("accesory");
      }  
    const handleMain=(e)=>{
        e.preventDefault();
        history.push("/");
        console.log("main");
      }  
    return(
        <ThemeProvider theme={theme}>   
  <div>
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
           
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          دسته بندیها
        </div>
        <ListItem button onClick={handleMain}>
        <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="صفحه اصلی" />
    </ListItem>
        <ListItem button onClick={handleMen}>
        <ListItemIcon>
        <InsertEmoticonIcon />
      </ListItemIcon>
      <ListItemText primary="مردانه" />
    </ListItem>
    <ListItem button onClick={handleWomen}>
      <ListItemIcon>
      <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="زنانه" />
    </ListItem>
    <ListItem button onClick={handleAccesory}>
      <ListItemIcon>
        <FilterVintageIcon />
      </ListItemIcon>
      <ListItemText primary="اکسسوری" />
    </ListItem>
      </Drawer>
  </div>
  </ThemeProvider>
)};

export default SideBar
