<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">占位的位子</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                    <h1>Hello </h1>
                    <h2>欢迎回来</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" placeholder="请输入" show-password />
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" @click="login" size="default">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import useUserStore from '@/store/modules/user'
import { ElMessage, ElNotification } from 'element-plus';
import { fa } from 'element-plus/es/locale';
import {getTime} from '@/utils/time'
// 收集表单数据
let loginForm = reactive({
    username: 'admin',
    password: '111111'
});

let loading = ref(false);

// 获取 el-form 实例
let loginForms = ref(null);
// 获取路由
let $router = useRouter();
let userStore = useUserStore();

// 登录按钮回调
const login = async () => {
    // 保证全部表单校验通过再发送请求
    await loginForms.value.validate();

    loading.value = true;
    try {
        // 保证登录成功
        await userStore.userLogin(loginForm);
        // 编程式导航跳转到展示数据首页
        $router.push('/');
        // 登录成功提示信息
        ElNotification({
            type:'success',
            message:'欢迎回来',
            title:`HI, ${getTime()}好`
        })
        // 登录成功加载状态消失
        loading.value = false;
    } catch(error) {
        // 登录失败加载状态消失
        loading.value = false;
        ElNotification({
            type:'error',
            message:(error as Error).message,
        })
    }
}

// 定义表单校验需要配置的对象
const rules = {
    username: [
        {required: true, message: '用户名不能为空！', trigger: 'blur'},
        {required: true, min:5, max:20, message: '用户名长度在5-20个字符之间', trigger: 'change'}
    ],
    password: [
        {required: true, min:6, max:15, message: '密码长度在6-15个字符之间', trigger: 'change'}
    ]
}

</script>
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background-color: blue;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width:80%;
        top:30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;

        padding:40px;
        h1 {
            color:white;
            font-size: 40px;
        }
        h2 {
            color:white;
            font-size: 20px;
            margin: 20px 0;
        }

        .login_btn {
            width: 100%;
            background-color: #409EFF;
        }

    }
}

</style>