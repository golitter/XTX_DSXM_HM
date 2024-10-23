// 进行axios二次封装：使用请求拦截器和响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
let request = axios.create({
    baseURL: '/api', // api的base_url
    timeout: 5000 // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use( (config) => {
    // config配置对象，headers属性请求头，经常给服务器端携带公共参数
    // 返回配置对象
    return config;
});

// 响应拦截器
request.interceptors.response.use( (response) => {
    // 成功回调
    // 简化数据
    return response.data;
}, (error) => {
    // 失败回调：处理网络错误信息
    // 定义一个变量：存储网络错误信息

    let message = '';
    // http状态码
    let status = error.response.status;
    switch (status) {
        case 400:
            message = '请求参数错误';
            break;
        case 401:
            message = '没有权限';
            break;
        case 403:
            message = '得到授权';
            break;
        case 404:
            message = '请求路径错误';
            break;
        case 500:
            message = '服务器错误';
            break;
        default:
            message = '网络错误';
            break;
    }
    // 提示错误信息
    ElMessage.error({
        type: 'error',
        message
    });
    return Promise.reject(error);
}
);

export default request;