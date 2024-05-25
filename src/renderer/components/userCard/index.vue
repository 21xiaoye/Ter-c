<script setup lang="ts">
// import { onMounted, ref } from 'vue'
// import type { CacheUserItem } from  '../../services/types'
// import apis from '../../services/apis';
import { useUserStore } from '../../stores/user';

const userStore = useUserStore();

// const props = defineProps<{
//     user: CacheUserItem
// }>()
</script>

<template>
    <div class="card">
        <div class="infos">
            <div class="img">
                <img :src="userStore.userInfo.avatar" />
            </div>
            <div class="textBox">
                <li class="list-item">
                    Feature
                    <span class="check">
                        <el-icon style="color: var(--v_brand_blue);">
                            <Male />
                        </el-icon>
                    </span>
                </li>
                <li class="list-item"><span class="check">uid:</span> Feature</li>
                <li class="list-item"><span class="check">地区:</span> Feature</li>
            </div>
        </div>
        <div class="btns">
            <button class="request">
                <el-icon :size="25">
                    <ChatDotRound />
                </el-icon>
            </button>
        </div>
    </div>
</template>

<style src="./styles.less" scoped lang="less"/>