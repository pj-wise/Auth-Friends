import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5000/api"
  });
};

export default axiosWithAuth;
