// 统一管理用户相关的接口
import request from '@/utils/request'
import { loginFormData, loginResponseData, userInfoReponseData } from './types'
// 统一管理接口
enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
};

// 暴露请求函数

// 登录接口方法
export const reqLogin = (data:loginFormData) => {
    return request.post<any,loginResponseData>(API.LOGIN_URL, data);
}

// 获取用户信息接口方法
export const reqUserInfo = () => {
    return request.get<any,userInfoReponseData>(API.USERINFO_URL);
}