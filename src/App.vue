<template>
  <div id="app">
    <h1>TEST  </h1>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <h1>SVG测试</h1>
    <svg-icon name="test1" width="300px" height="300px"></svg-icon>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import {Plus} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>