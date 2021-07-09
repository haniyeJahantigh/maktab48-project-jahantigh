import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { login } from "../api/login";
import {  useHistory } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { setToken } from "../redux/actions/userAction";

const theme = createMuiTheme({
  direction: "rtl",
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if ((username, password)) {
      login(username, password)
        .then((res) => {
          localStorage.setItem("token", res.token);
          history.push("/dashboard/manage");
          console.log("token");
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    dispatch(setToken());
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleBackToHome=(e)=>{
    e.preventDefault();
    history.push("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container dir="rtl" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ورود به پنل مدیریت فروشگاه
          </Typography>
          <form
            onSubmit={handleLogin}
            className={classes.form}
            dir="rtl"
            noValidate
            autoComplete="off"
          >
            <div dir="rtl">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                placeholder=" نام کاربری"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={handleChange}
              />
            </div>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />

            <Button
              onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ورود
            </Button>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Link href="#" onClick={handleBackToHome}>
                بازگشت به سایت
              </Link>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
