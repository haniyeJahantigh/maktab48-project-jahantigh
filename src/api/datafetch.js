import axios from "axios";

export const datafetch = async () => {
  let res = await axios.get("https://fakestoreapi.com/products")
  .then(resp => {
    console.log(resp.data)
});
  return res;
};

