import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TabBar from "./TabBar";

const theme = createMuiTheme({
  direction: "rtl",
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    height: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  BackBtn: {
    textAlign: "left",
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-end",
  },
  StorName:{
    textAlign: "right",
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
  }
}));

const AdminHeader = () => {
  const classes = useStyles();
  let history = useHistory();

  const handleUser = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" dir="rtl">
          <Toolbar>
            <Grid container justify="center">
              <Grid item xs={12} lg={3}  className={classes.StorName}>
                <Typography variant="h6" className={classes.title}>
                  پنل مدیریت فروشگاه
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TabBar />
              </Grid>
              <Grid item xs={12} lg={3} className={classes.BackBtn}>
                <Button color="inherit" onClick={handleUser}>
                  بازگشت به سایت
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default AdminHeader;
