import React, { useEffect, useState } from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
function withLoading(WrappedComponent, api) {
  const WithLoadingComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
      fetch(api)
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setIsLoading(false);
          setOpen(!open)
          setData(json);
        });
    }, []);

    if (isLoading) {
        
        return (
        <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
       <p> &nbsp;&nbsp; loading</p>
      </Backdrop>
      );
    } else {
      return <WrappedComponent data={data} {...props} />;
    }
  };

  return WithLoadingComponent;
}
export default withLoading;


