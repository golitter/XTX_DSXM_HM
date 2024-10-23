// 用户相关的小仓库

import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import { loginFormData, loginResponseData  } from "@/api/user/types";
// 创建用户小仓库
let useUserStore = defineStore('User', {
    // 小仓库存储数据地方
    state: () => {
        return {
            token:'' // 用户唯一标识token
        }
    },
    // 异步|逻辑 的地方
    actions: {
        // 用户登录的方法
        async userLogin(data:loginFormData) {
            // 登录请求
            let result:loginResponseData = await reqLogin(data);
            // 登录成功：200 -》 token
            // 登录失败：201 -》 message
            if(result.code === 200) {
                // pinia仓库存储一下token
                this.token = result.data as string ;
                console.log(this.token);
                // 本地存储持久化一份
                localStorage.setItem("TOKEN", result.data as string);

                // 能保证当前async函数返回一个成功的promise
                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message));
            }
                
        }
    },
    getters:{

    }
});
// 导出用户小仓库
export default useUserStore;