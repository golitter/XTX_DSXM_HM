<template>
    <!-- svg图标外层容器节点，内部需要与use标签结合使用 -->
    <svg :style="{width,height}">
        
        <!--  use标签引用svg图标 -->
      <use :xlink:href="prefix + name" ></use>
    </svg>
</template>

<script setup lang="ts">
// 接收父组件传递的参数
defineProps({
    // 图标类名前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    // 图标名称
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#000'
    },
    height: {
        type: String,
        default: '30px'
    },
    width: {
        type: String,
        default: '30px'
    }
})
</script>

<style scoped>
</style>