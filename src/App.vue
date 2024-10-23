<template>
  <div id="app">
    <h1>测试axios二次封装</h1>
  </div>
</template>
<script setup lang="ts">

import {onMounted} from 'vue'
import {reqLogin} from './api/user'
// 当组件挂载完毕测试发一个请求
onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111'
  }).then(res => {
    console.log(res)
  })
});
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>