import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  Input,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {addDatafetch} from '../api/addDatafetch'

const theme = createMuiTheme({
  direction: "rtl",
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "5px"
  },
}));

const category = [
  {
    value: "electronics",
    label: "electronics",
  },
  {
    value: "jewelery",
    label: "jewelery",
  },
  {
    value: "men clothing",
    label: "men clothing",
  },
  {
    value: "women clothing",
    label: "women clothing",
  },
];

export default function AddModal({ open, setOpen, props }) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");
  //   const [open, setOpen] = React.useState(false);
  //   const [close, setClose] = React.useState(false);
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct=()=>{
    setOpen(false);
    addDatafetch();
    console.log('add new pro');
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          dir="rtl"
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open} dir="rtl">
            <Container maxWidth="sm" dir="rtl">
              <div className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={9}>
                    <Typography>افزودن کالا</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <CancelIcon onClick={handleClose} />
                  </Grid>
                  
                  <Grid item xs={12}  maxWidth="lg">
                    <Input
                      label="تصویر کالا"
                      type="file"
                      accept="image/*"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      label="نام کالا"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      fullWidth
                      id="sort"
                      select
                      label="دسته بندی"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your category"
                      variant="outlined"
                    >
                      {category.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      id="outlined-multiline-static"
                      label="توضیحات"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    
                  >
                    <Button variant="contained" color="primary" fullWidth onClick={handleAddProduct}>
                      ذخیره
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
