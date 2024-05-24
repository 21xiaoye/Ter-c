<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>

<template>
    <div class="chat-msg">
        <div class="msg-input">
            <textarea v-model="textarea" class="text"/>
        </div>
        <div class="msg-btn">
            <button>发送(S)</button>
        </div>
    </div>
</template>

<style scoped lang="less" src="./styles.less"/>