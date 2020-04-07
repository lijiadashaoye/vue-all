import axios from "axios"; // vue的http功能
// 参考：https://www.jianshu.com/p/7a9fbcbb1114

axios.defaults.baseURL = 'https://api.coindesk.com';
// axios.defaults.headers['Authorization'] = 'user_token';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // 请求成功
    return config;
}, function (error) {
    // 请求失败
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // 响应成功
    return response;
}, function (error) {
    // 响应失败
    return Promise.reject(error);
});

export default {
    getData() {
        return axios
            .get("/v1/bpi/currentprice.json")
            .then(res => {
                return res.data
            })
            .catch(error => console.log(error))
        // .finally(() => console.log("finally"));
    }
}