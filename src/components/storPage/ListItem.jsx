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

const drawerWidth = 140;
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
        </div>
        <ListItem button>
        <ListItemIcon>
        <InsertEmoticonIcon />
      </ListItemIcon>
      <ListItemText primary="مردانه" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="زنانه" />
    </ListItem>
    <ListItem button>
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
