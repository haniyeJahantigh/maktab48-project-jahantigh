import axios from "axios";

export const getAllOrders = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:8000/orders",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
 
  return res;
};


export const putStatus=async (id,updatedObj) =>{
let res=await axios({
  method:"put",
  url: `http://localhost:8000/orders/${id}`,
  headers: { "content-type": "application/json" },
  data:updatedObj,
})
return res
}

/*
 *  POST api for add a new Order
 */

export const addedOrder = async (newOrder) => {
  try {
    let res = await axios({
      method: "post",
      url: "http://localhost:8000/orders",
      headers: { "content-type": "application/json" },
      data: newOrder
    })
    console.log("new order:", res);
    return res;
  } catch (err) {
     console.log(err) 
  };
}