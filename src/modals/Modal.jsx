import React,{useState} from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { useFilePicker } from "use-file-picker";
import { Typography, Grid,Button,TextField, MenuItem,Input,Modal,Backdrop,Fade,Container} from "@material-ui/core";
import { createMuiTheme, ThemeProvider,makeStyles } from "@material-ui/core/styles";
import imageToBase64 from 'image-to-base64/browser';

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
  {
    value: "کیف و کوله‌پشتی",
    label: "کیف و کوله‌پشتی",
  },
];

export default function AddModal({ open, setOpen, props,add }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imagePro, setImagePro] = useState("");

 /*
   * 'use-file-picker' react hook for select file.
  */
 const [openFileSelector, { filesContent }] = useFilePicker({
  readAs: "DataURL",
  accept: "image/*",
  multiple: true,
  // limitFilesConfig: { max: 1 },
  // minFileSize: 0.1, // in megabytes
  // maxFileSize: 50,
  // imageSizeRestrictions: {
  //   maxHeight: 900, // in pixels
  //   maxWidth: 1600,
  //   minHeight: 600,
  //   minWidth: 768,
  // },
});
let image= filesContent[0]?.content
/*
* use output 'use-file-picker'
*/
//   console.log(filesContent[0]?.content);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct=(e)=>{
    e.preventDefault();
    setOpen(false);
 setImagePro(filesContent[0]?.content)
    add({title,description,cat,price,stock,imagePro});

    console.log(title);
    console.log(description);

    setTitle("");
    setDescription("");
    setCat('');
    setPrice("");
    setStock("")
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
                  
                  {/* <Grid item xs={12}  maxWidth="lg">
                    <Input
                      label="تصویر کالا"
                      type="file"
                      accept="image/*"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={imagePro}
                      onChange={(e) => setImagePro(e.target.value)}
                    />
                  </Grid> */}
                  <Grid
              justify="space-between"
              alignItems="center"
              xs={12}
              item
              container
            >
                  <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  placeholder=" تصویر کالا"
                  name="image"
                  // margin="normal"
                  // disabled
                  fullWidth
                  value={imagePro}
                  onChange={(e) => setImagePro(e.target.value)}

                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="button"
                  onClick={() => {
                    openFileSelector();
                  }}
                  className={classes.btnFile}
                >
                  Browse
              </Button>
              </Grid>
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
                      size="small"
                      select
                      label="دسته بندی"
                      helperText="Please select your category"
                      variant="outlined"
                      value={cat}
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
                      label="قیمت"
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      id="outlined-multiline-static"
                      label="موجودی"
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={stock}
                      onChange={(e)=>setStock(e.target.value)}
                    />
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
