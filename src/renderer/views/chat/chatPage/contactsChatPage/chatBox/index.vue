<script setup lang="ts">
import msgInput from '../msgInput/index.vue';
import { EmojiItem } from '../../../../../services/types';
import { emojis } from '../constant';
import { ref } from 'vue';
const panelIndex = ref(0)

// 收藏的图片，这里我进行模拟
const emojiList = ref<EmojiItem[]>([
    {
        id:1,
        expressionUrl:'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }, 
    {
        id: 2,
        expressionUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        id: 3,
        expressionUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        id: 4,
        expressionUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        id: 5,
        expressionUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    }
    ,])
 
</script>
<template>
    <div class="chat-edit">
        <div class="chat-tools">
            <div class="tools-left">
                <el-popover placement="top-start" title="" popper-class="emoji-warpper" :width="402" trigger="click">
                    <template #reference>
                        <el-icon class="icon">
                            <Picture />
                        </el-icon>
                    </template>
                    <div class="emoji-panel">
                        <div class="emoji-panel-content" v-show="panelIndex === 0">
                            <span class="emoji-panel-title">全部表情</span>
                            <ul class="emoji-list">
                                <li class="emoji-item" v-for="(emoji, $index) of emojis" :key="$index">
                                    {{ emoji }}
                                </li>
                            </ul>
                        </div>

                        <div class="emoji-panel-content" v-show="panelIndex === 1">
                            <span class="emoji-panel-title">添加的单个表情</span>
                            <div class="emoji-list">
                                <div v-for="emoji in emojiList" :key="emoji.id" class="item">
                                    <img :src="emoji.expressionUrl" />
                                    <el-icon class="del">
                                        <RemoveFilled />
                                    </el-icon>
                                </div>
                                <div class="item-add">
                                    <el-icon class="item">
                                        <Plus />
                                    </el-icon>
                                </div>
                            </div>
                        </div>

                        <div class="footer">
                            <el-icon class="icon" @click="panelIndex = 0" :class="[{ active: panelIndex === 0 }]">
                                <Picture />
                            </el-icon>

                            <el-icon class="icon" @click="panelIndex = 1" :class="[{ active: panelIndex === 1 }]">
                                <Star />
                            </el-icon>

                        </div>
                    </div>
                </el-popover>
                <el-icon class="icon">
                    <Folder />
                </el-icon>
                <el-icon class="icon">
                    <ChatDotRound />
                </el-icon>
            </div>
            <div class="tools-right">
                <el-icon class="icon">
                    <Microphone />
                </el-icon>
            </div>
        </div>
        <msgInput />
    </div>
</template>

<style scoped src="./styles.less" lang="less">
.emoji-warpper {
    padding: 4px !important;
    padding-top: 8px !important;
    color: var(--font-main) !important;
    background-color: var(--background-wrapper) !important;
    border: none !important;
}
</style>