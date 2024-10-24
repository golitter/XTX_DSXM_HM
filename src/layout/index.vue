<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
         <div class="layout_slider">
            <Logo></Logo>
         </div>
         <!-- 顶部导航 -->
          <div class="layout_tabbar">456</div>
          <!-- 内容展示区 -->
           <div class="layout_main">789</div>
    </div>
</template>
<script setup lang="ts">
// 引入左侧菜单logo子组件
import Logo from './logo/index.vue'
</script>
<style scoped lang="scss">
    .layout_container {
        width: 100%;
        height:100vh;
        background: red;

        .layout_slider {
            width: $base-menu-width;
            height: 100vh;
            background: $base-menu-bg;
        }

        .layout_tabbar {
            position: fixed;
            width: calc(100% - $base-menu-width);
            height: $base-tabbar-height;
            background: cyan;
            top:0px;
            left:$base-menu-width;
        }
        .layout_main {
            position: relative;
            width: calc(100% - $base-menu-width);
            height: calc(100vh - $base-tabbar-height);
            background-color: yellowgreen;
            left:$base-menu-width;
            top:$base-tabbar-height;
            padding:20px;
            overflow: auto;
        }
    }
</style>