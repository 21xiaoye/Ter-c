<script setup lang="ts">

import msgItem from './msgItem/index.vue'
</script>

<template>
    <div>
        <msgItem v-for="index in 1000" :key="index"/>
    </div>
</template>

<style scoped lang="less" src="./styles.less"/>