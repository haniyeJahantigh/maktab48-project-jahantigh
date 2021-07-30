import React,{useState} from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { Typography, Grid,Button,TextField, MenuItem,Input,Modal,Backdrop,Fade,Container} from "@material-ui/core";
import { createMuiTheme, ThemeProvider,makeStyles } from "@material-ui/core/styles";
import imageToBase64 from 'image-to-base64/browser';
// import {addDatafetch} from '../api/addDatafetch'

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
    value: "لباس مردانه",
    label: "لباس مردانه",
  },
  {
    value: "لباس زنانه",
    label: "لباس زنانه",
  },
];

export default function AddModal({ open, setOpen, props,add }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cat, setCat] = useState("");
  const [imagePro, setImagePro] = useState("");



  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct=(e)=>{
    e.preventDefault();
    setOpen(false);

    add({title,description});

    console.log(title);
    console.log(description);

    setTitle("");
    setDescription("")
    console.log('add new pro');
  }
  
  const handleImage=(e)=>{
console.log(e.target.value);
imageToBase64("e.target.value") // Path to the image
    .then(
        (response) => {
            console.log(response); 
            setImagePro(response)
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
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
                      onChange={handleImage}

                    />
                  
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      label="نام کالا"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      fullWidth
                      id="sort"
                      select
                      label="دسته بندی"
                      helperText="Please select your category"
                      variant="outlined"
                      // value={cat}
                      onChange={(e)=> setCat(e.target.value)}
                    >
                      {category.map((option) => (
                        <MenuItem key={option.value} value={option.value} >
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
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
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
