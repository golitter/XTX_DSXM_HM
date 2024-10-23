export interface LoginForm {
    username:string,
    password:string
};

// 登录接口返回的数据类型
export interface LoginResponseData {
    code:number,
    data:{
        token:string
    }
}

interface UserInfo {
    userId:number,
    avatar:string,
    username:string,
    password:string,
    desc:string,
    roles:string[],
    buttons:string[],
    routers:string[],
    token:string
}

// 定义服务器返回的用户信息数据类型
export interface UserInfoResponseData {
    code:number,
    data:{
        checkUser:UserInfo
    }
}