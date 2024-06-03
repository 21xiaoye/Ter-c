<script setup lang="ts">
import { useChatStore } from '../../../../../stores/chat';

const chatStore = useChatStore();
const getSessionList = ()=>{
    console.log("dq");
    
    chatStore.getSessionList(true);
}

</script>

<template>
    <div class="card">
        <div class="room-name">
            <span>管理群</span>
        </div>
        <div class="edit" @click="getSessionList">
            <el-icon class="icon" >
                <MoreFilled/>
            </el-icon>
        </div>
    </div>

</template>

<style lang="less" scoped src="./styles.less"/>