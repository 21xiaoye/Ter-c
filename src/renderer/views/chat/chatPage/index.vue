<script setup lang="ts">
import contactsChatPage from './contactsChatPage/index.vue'
import searchComponents from '../../../components/searchComponents/index.vue'
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
                <div class="card" v-for="index in 6" :key="index">
                    <a class="card1" href="#">
                        <p>This is heading</p>
                        <p class="small">Card description with lots of great facts and interesting details.</p>
                        <div class="go-corner" href="#">
                            <div class="go-arrow">
                                →
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="ter-chatPage">
            <contactsChatPage />
        </div>
    </div>
</template>

<style lang="less" src="./styles.less" scoped/>