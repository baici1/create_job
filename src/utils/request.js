import axios from "axios";
import router from "vue-router";
let service = axios.create({
  baseURL: "/api", //process.env.VUE_APP_BASE_API
  timeout: 5000,
});
//请求拦截器
service.interceptors.request.use(
  (config) => {
    //获取token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器;
service.interceptors.response.use(
  (response) => {
    if (response.data.status == 100) {
      router.push("/");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
