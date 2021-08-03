import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFilePicker } from "use-file-picker";
import { useDispatch } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Typography,
  Grid,
  Button,
  TextField,
  Input,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { updateProductById } from "../redux/actions/productAction";

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

export default function EditModal({ openEdit, setOpenEdit,filterData}) {

  const classes = useStyles();
  // const [image, setImage] = useState(editedObj.image);
  const [title, setTitle] = useState(filterData.title);
  const [category, setCategory] = useState(filterData.category);
  const [description, setDescription] = useState(filterData.description);

  const dispatch = useDispatch();

  const [openFileSelector, { filesContent }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
  });
 
  const handleChange = (event) => {
    
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleAddProduct=()=>{
    let updatedProductObj = { ...filterData, title, category, description };
    console.log(updatedProductObj);
    dispatch(updateProductById(filterData.id, updatedProductObj))
    setOpenEdit(false);
    console.log('add new pro');
  }
// console.log(product);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openEdit}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          dir="rtl"
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openEdit} dir="rtl">
            <Container maxWidth="sm" dir="rtl">
              <div className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={9}>
                    <Typography>ادیت کالا</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <CancelIcon onClick={handleClose} />
                  </Grid>
                  <Grid container spacing={3}>
                  <Grid item xs={12} sm={9} maxWidth="lg">
                    <Input
                      label="تصویر کالا"
                      type="file"
                      accessKey="image"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  </Grid>
                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      label="نام کالا"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // defaultValue={filterData.title}
                    />
                  </Grid>

                  <Grid item xs={12} maxWidth="lg">
                    <TextField
                      fullWidth
                      id="sort"
                      select
                      label="دسته بندی"
                      value={category}
                      onChange={handleChange}
                      helperText="Please select your category"
                      variant="outlined"
                      // defaultValue={filterData.category}
                    >
                      
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
                      // defaultValue={filterData.description}
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
