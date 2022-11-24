/*
Do not modify unless working on React Forms Assessment.
*/

import axios from "axios";

const product = (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "https://api.remotebootcamp.dev/api/entities/products",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const productService = { product };
export default productService; // export all your calls here
