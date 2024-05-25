<script setup lang="ts">
import searchComponents from '../../../components/searchComponents/index.vue' 
</script>

<template>
    <div class="ter-menu">
        <div class="ter-search">
            <searchComponents />
            <div class="button-item">
                <button class="Btn">
                    <el-icon :size="20">
                        <UserFilled />
                    </el-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less" src="./styless.less">
</style>