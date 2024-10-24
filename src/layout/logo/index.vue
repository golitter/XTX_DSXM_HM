<template>
    <div class="logo">
        <img :src="setting.logo" v-if="setting.logoHidden" alt="">
        <p>{{ setting.title }}</p>
    </div>
</template>
<script setup lang="ts">
// 引入设置标题和logo配置
import setting from '@/setting';
</script>
<style scoped lang="scss">
.logo {
    width: 100%;
    height: $base-menu-logo-height;
    color:white;
    display: flex;
    align-items: center;
    padding:20px;
    img {
        width: 40px;
        height: 40px;
    }
    p {
        font-size: $base-logo-title-fontSize;
        margin-left:10px;
    }
}
</style>