<script setup lang="ts">
import { useUserStore } from "../../stores/user"
import  userCard  from '../userCard/index.vue' 
const userStore = useUserStore();

</script>

<template>
    <div id="items" class="sidebar-container" v-if="!$route.meta.hideSidebar">
        <div>
            <div class="style-scope sidebar-item">
                <a>
                    <el-popover placement="bottom" trigger="hover" :width="330">
                        <template #reference>
                            <img :src="userStore.userInfo.avatar" class="avatar">
                        </template>
                        <userCard />
                    </el-popover>
                </a>
            </div>
            <div class="sidebar-item">
                <RouterLink to="/chat">
                    <el-icon :size="25" :color="$route.path === '/chat' ? 'green' : 'white'">
                        <ChatDotRound />
                    </el-icon>
                </RouterLink>
            </div>
            <div class="sidebar-item">
                <RouterLink to="/contacts">
                    <el-icon :size="25" :color="$route.path === '/contacts' ? 'green' : 'white'">
                        <User />
                    </el-icon>
                </RouterLink>
            </div>
            <div class="sidebar-item">
                <RouterLink to="/set-up">
                    <el-icon :size="25" :color="$route.path === '/set-up' ? 'green' : 'white'">
                        <Setting />
                    </el-icon>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./navigation.less" scoped>
</style>