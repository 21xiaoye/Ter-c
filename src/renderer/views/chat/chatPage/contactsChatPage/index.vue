
<script setup lang="ts">
import RoomName from './roomName/index.vue'
import chatBox from './chatBox/index.vue'
import chatList from './chatList/index.vue'
</script>
<template>
    <div class="ter-chat">
        <div>
            <RoomName />
        </div>
        <div class="chat-list">
           <chatList/>
        </div>
        <div class="chat-message">
            <chatBox/>
        </div>
    </div>
</template>

<style scoped lang="less" src="./styles.less"/>