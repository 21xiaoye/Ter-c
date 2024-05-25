<script setup lang="ts">
import contactsChatPage from './contactsChatPage/index.vue'
import searchComponents from '../../../components/searchComponents/index.vue'
import { computed } from 'vue';
import { useChatStore } from '../../../stores/chat';

const useStore = useChatStore();
const cardIndex = computed(() => useStore.chatIndex);

const count = (index:number)=>{
    useStore.chatIndex = index;    
}
</script>
<template>
    <div style="display: flex;">
        <div class="ter-chatlist">
            <div class="ter-search">
                <searchComponents />
                <div class="button-item">
                    <button class="Btn">
                        <el-icon :size="20">
                            <Plus />
                        </el-icon>
                    </button>
                </div>
            </div>

            <div class="ter-chat-list">
                <div class="card" v-for="index in 30" :key="index" :class="{ 'active': index === cardIndex }"
                    @click="count(index)">
                    <div class="img"></div>
                    <div class="textBox">
                        <div class="textContent">
                            <p class="h1">Clans of Clash</p>
                            <span class="span">19:14</span>
                        </div>
                        <div class="textContent msgContent">
                            <span class="h2 span">你现在在干嘛呢?1111111111111111111</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="ter-chatPage">
            <contactsChatPage />
        </div>
    </div>
</template>

<style lang="less" src="./styles.less" scoped/>