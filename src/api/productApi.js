import axios from "axios";

export const getAllProducts = async () => {
    let res = await axios({
      method: "get",
      url: "http://localhost:8000/products",
      headers: { "content-type": "application/json" },
    }).catch((err) => console.log(err));
    return res;
  };

/*
 * .......... get a product..........
 */

export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:8000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

//   /*
//  *  POST api for add a new product
//  */

export const addedProduct = async (newProduct) => {
  try {
    let res = await axios({
      method: "post",
      url: "http://localhost:8000/products",
      headers: { "content-type": "application/json" },
      data: newProduct
    })
    if (res.status === 201) {
      console.log("post data is ok");
    }
    console.log("post api", res);
    return res;
  } catch (err) {
     console.log(err) 
  };
}


/*
*  PUT api for update product
*/


export const updateProduct = async (id, updateProduct) => {
  try {
    let res = await axios({
      method: "put",
      url: `http://localhost:8000/products/${id}`,
      headers: { "content-type": "application/json" },
      data: updateProduct,
    })
    return res;
  }
  catch (err) {
    throw err
  };
};





