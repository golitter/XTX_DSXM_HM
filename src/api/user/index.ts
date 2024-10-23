// 统一管理用户相关的接口
import request from '@/utils/request'
import { LoginResponseData, UserInfoResponseData, LoginForm } from './types'
// 统一管理接口
enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
};

// 暴露请求函数

// 登录接口方法
export const reqLogin = (data:LoginForm) => {
    return request.post<any,LoginResponseData>(API.LOGIN_URL, data);
}

// 获取用户信息接口方法
export const reqUserInfo = () => {
    return request.get<any,UserInfoResponseData>(API.USERINFO_URL);
}