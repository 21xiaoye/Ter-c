<script setup lang="ts">
import msgItem from './msgItem/index.vue'

</script>

<template>
    <div>
        <msgItem v-for="index in 100" :key="index" :msg-location="index % 3 ===0"  />
    </div>
</template>

<style scoped lang="less" src="./styles.less"/>