import axios from "axios";

export const login = async (username, password) => {
  let res = await axios({
    method: "post",
    url: "https://fakestoreapi.com/auth/login",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
     username,
      password,
    }),
  });
  return res;
};


