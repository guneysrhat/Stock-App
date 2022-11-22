import axios from "axios";

//! Piyasa da kullanilan uzun yontem
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

export const axiosWithToken = axios.create({
  baseURL: "https://14240.fullstack.clarusway.com/",
  headers: { Authorization: `Token ${token}` },
});
