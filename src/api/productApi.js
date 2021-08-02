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

// export const addedProduct = async (newProduct) => {
//   try {
//     let res = await axiosConfig({
//       method: "post",
//       url: "/products",
//       headers: { "content-type": "application/json" },
//       data: newProduct
//     })
//     if (res.status === 201) {
//       // console.log("post data is ok");
//       // toast.success(` added successfully`)
//     }
//     if (res.status === 404) {
//       // console.log("post data is ok");
//       return toast.error("Not found")
//     }
//     if (res.status === 500) {
//       return toast.error("Network error")
//     }
//     console.log("post api", res);
//     return res;
//   } catch (err) {
//     //  console.log(err) 
//     throw err
//   };
// }
// // export const postNewProduct =async (newProduct) => {
// //   let res = await axiosConfig({
// //     method: "post",
// //     url: "http://localhost:5000/products",
// //     headers: { "content-type": "application/json" },
// //     data: newProduct
// //   }).catch((err) => console.log(err));
// //   console.log("post api",res);
// //   return res;
// // }

// /*
//  *  DELETE api for delete selected product
//  */
// export const deleteProduct = async (id) => {
//   let res = await axiosConfig({
//     method: "delete",
//     url: `/products/${id}`,
//     headers: { "content-type": "application/json" },
//   });
//   // console.log(res);
//   return res;
// };
// /*
// *  PUT api for update product
// */


// export const updateProduct = async (id, updateProduct) => {
//   try {
//     let res = await axiosConfig({
//       method: "put",
//       url: `/products/${id}`,
//       headers: { "content-type": "application/json" },
//       data: updateProduct,
//     })
//     return res;
//   }
//   catch (err) {

//     throw err
//   };
//   // console.log("res put api",res);

// };

// /*
//  * GET api for get categoryList & limit6
//  */
// // 'http://localhost:5000/products?category=&start=0&_limit=6'
// export const getCategoryList = async (category) => {
//   let res = await axiosConfig({
//     method: "get",
//     url: `/products?category=${category}&start=0&_limit=6`,
//     headers: { "content-type": "application/json" },
//   }).catch((err) => console.log(err));
//   return res;
//   // console.log(res.data);
//   // setData(res.data)
// }
// export const getAllCategoryList = async (category) => {
//   let res = await axiosConfig({
//     method: "get",
//     url: `/products?category=${category}`,
//     headers: { "content-type": "application/json" },
//   }).catch((err) => console.log(err));
//   return res;
//   // console.log(res.data);
//   // setData(res.data)
// }
// // http://localhost:5000/products?category=%D8%B4%D9%88%DB%8C%D9%86%D8%AF%D9%87&_sort=id&_order=desc&_page=1&_limit=4
// /*
//  * GET api for get sorting & pagination & limit4
//  */
// export const getChangeList = async (category,sort,order,page) => {
//   let res = await axiosConfig({
//     method: "get",
//     url: `/products?category=${category}&_sort=${sort}&_order=${order}&_page=${page}&_limit=4`,
//     headers: { "content-type": "application/json" },
//   }).catch((err) => console.log(err));
//   return res;
//   // console.log(res.data);
//   // setData(res.data)
// }



