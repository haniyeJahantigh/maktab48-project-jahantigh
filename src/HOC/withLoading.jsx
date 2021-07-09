import React, {useEffect, useState} from "react";

function withLoading(WrappedComponent,api) {

    const WithLoadingComponent=(props)=>{
        const [isLoading,setIsLoading]=useState(true);
        const [data,setData]=useState([]);
        
        useEffect(()=>{

            fetch(api)
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json);
                    setIsLoading(false);
                    setData(json)
                });
        },[]) ;


        if (isLoading){
            return <div style={{width:"100%" , display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100%"}}>isLoading</div>
        } else{
            return <WrappedComponent data={data} {...props}  />
        }
    };

    return WithLoadingComponent;
}
export default withLoading