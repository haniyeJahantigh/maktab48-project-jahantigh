import React,{ useState ,useEffect}  from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {useParams , useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));
  

const Product = () => {
    const classes = useStyles();
    const {id}=useParams()
    const [productData,setProductData]=useState(null);
    let history=useHistory();

    useEffect(() => {
          fetchProduct(id);
        }, [])

        const fetchProduct = async (id) => {
            try {
              const response = await fetch(`http://localhost:8000/products/${id}`);
              const data = await response.json();
              setProductData(data)
              if(response.status === 404){
                  toast.error("not found")
                  history.push("/")
              }
            } catch (err) {
              toast.error("request failed!");
            }
          };
    return (
        <div>
            <h1 className="task-title">{productData?.title}</h1>
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${productData.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={productData.image} alt={productData.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={12} >
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {productData.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {productData.category}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {productData.price}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {productData.stock}
            </Typography>

            <Button variant="contained" color="primary">
        افزودن به سبد خرید
      </Button>
      <TextField id="outlined-basic" label="تعداد" variant="outlined"  type='number' defaultValue='1'/>
          </div>
        </Grid>
        <Grid item xs={12} >
        <Typography variant="h5" color="inherit" paragraph>
              {productData.description}
            </Typography>
        </Grid>
      </Grid>
    </Paper>
        </div>
    )
}

export default Product
