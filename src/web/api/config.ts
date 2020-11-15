import axios from 'axios';
import config from '../config/global';

const service = axios.create({
  baseURL: config.baseUrl + config.path,
  timeout: window.location.href.match(/dev|localhost/g) ? 5000 : 20000,
  withCredentials: true,
}); // request interceptor
// service.interceptors.request.use(
//   (config) => {
//     // do something before request is sent
//     if (config.method === "post") {
//       config.data = qs.stringify(config.data);
//       config.headers["Content-type"] = "application/x-www-form-urlencoded";
//     }
//     return config;
//   },
//   (error) => {
//     // do something with request error
//     console.log(error); // for debug
//     return Promise.reject(error);
//   }
// );
// // 响应拦截器
// service.interceptors.response.use(
//   (response) => {
//     return Promise.resolve(response.data);
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

export default service;
