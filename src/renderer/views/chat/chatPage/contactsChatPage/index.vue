
<script setup lang="ts">
import RoomName from './roomName/index.vue'
import chatBox from './chatBox/index.vue'
</script>
<template>
    <div class="ter-chat">
        <div>
            <RoomName />
        </div>
        <div class="chat-list">
            <div v-for="index in 1000" :key="index">
                消息
            </div>
        </div>
        <div class="chat-message">
            <chatBox/>
        </div>
    </div>
</template>

<style scoped lang="less" src="./styles.less"/>