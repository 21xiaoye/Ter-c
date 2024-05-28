<script setup lang="ts">
import { swichRouter } from "../../main";
import { useUserStore } from "../../stores/user"
import  userCard  from '../userCard/index.vue' 
const userStore = useUserStore();
const login = ()=>{
    if(!userStore.isSign){
        swichRouter('/login');
    }
}

const logOut = ()=>{
    userStore.outLogin();
}
</script>

<template>
    <div id="items" class="sidebar-container" v-if="!$route.meta.hideSidebar">
        <div>
            <div class="style-scope sidebar-item">
                <a>
                    <el-popover placement="bottom" trigger="hover" :width="330">
                        <template #reference>
                            <img :src="userStore.userInfo.avatar" class="avatar" @click="login">
                        </template>
                        <userCard />
                    </el-popover>
                </a>
            </div>
            <div class="sidebar-item">
                <RouterLink to="/chat">
                    <el-icon :size="25" class="icon" :color="$route.path === '/chat' ? '#00AEEC' : 'white'">
                        <ChatDotRound />
                    </el-icon>
                </RouterLink>
            </div>
            <div class="sidebar-item">
                <RouterLink to="/contacts">
                    <el-icon :size="25" class="icon" color="$route.path === '/contacts' ? '#00AEEC' : 'white'">
                        <User />
                    </el-icon>
                </RouterLink>
            </div>
            <div class="sidebar-item">
                <RouterLink to="/set-up">
                    <el-icon :size="25" class="icon" :color="$route.path === '/set-up' ? '#00AEEC' : 'white'">
                        <Setting />
                    </el-icon>
                </RouterLink>
            </div>
        </div>

        <div class="buttom">
            <div class="sidebar-item">
                <el-popover placement="top" :width="200" trigger="click">
                    <template #reference>
                        <el-icon :size="25">
                            <Operation />
                        </el-icon>
                    </template>
                    <div class="edit">
                        <div class="edit-item">
                            <el-icon class="icon" :size="20">
                                <Connection />
                            </el-icon>
                            <span> 
                                <el-link href="https://github.com/21xiaoye/Ter.git" target="_blank">github</el-link>
                            </span>
                        </div>
                        <div class="edit-item" @click="logOut">
                            <el-icon class="icon" :size="20">
                                <SwitchButton />
                            </el-icon>
                            <span>退出登录</span>
                        </div>
                    </div>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./navigation.less" scoped>
</style>