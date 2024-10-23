<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">占位的位子</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello </h1>
                    <h2>欢迎回来</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入" />
                    </el-form-item>
                    <el-form-item>
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
// 收集表单数据
let loginForm = reactive({
    username: 'admin',
    password: '111111'
});

let loading = ref(false);

// 获取路由
let $router = useRouter();
let userStore = useUserStore();
// 登录按钮回调
const login = async () => {
    loading.value = true;
    try {
        // 保证登录成功
        await userStore.userLogin(loginForm);
        // 编程式导航跳转到展示数据首页
        $router.push('/');
        // 登录成功提示信息
        ElNotification({
            type:'success',
            message:'登录成功',
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