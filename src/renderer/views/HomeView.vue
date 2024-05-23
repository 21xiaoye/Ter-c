<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useUserStore } from "../../renderer/stores/user"
import { ref } from 'vue';
interface SidebarItem {
    label: string;
    icon: string;
    active: boolean;
    path:string,
}

const userStore = useUserStore();

const items = ref<SidebarItem[]>([
    { label: '首页', icon: '/home.svg', active: true ,path:'/'},
    { label: '聊天', icon: '/chat.svg', active: false, path:'/chat' },
    { label: '设置', icon: '/set-up.svg', active: false, path:'/set-up'}
]);

const setActive = (selectedItem: SidebarItem) => {
    // 只在点击的项目与当前active项目不同的时候才更新active状态
    if (!selectedItem.active) {
        items.value.forEach(item => {
            item.active = false;
        });
        selectedItem.active = true;
        window.electronAPI.sendMessage(selectedItem.path);
    }
};

</script>


<template>
    <main class="ter-main">
        <div class="ter-app">
            <div id="items" class="sidebar-container" v-if="!$route.meta.hideSidebar">
                <div class="style-scope  sidebar-item">
                    <a href="#">
                        <img :src="userStore.userInfo.avatar" class="avatar">
                    </a>
                </div>
                <div v-for="item in items" :key="item.label" class="sidebar-item" :class="{ active: item.active }"
                    @click="setActive(item)">
                    <a href="#">
                        <img :src="item.icon" alt="图标" class="icon">
                        <div class="label">{{ item.label }}</div>
                    </a>
                </div>
            </div>
            <div class="ter-view">
                <RouterView />
            </div>
        </div>
    </main>
</template>

<style lang="less">
#items{
    width: 50px;
    height: 100vh;
}
.ter-main{
    .ter-app{
        display: flex;
        .sidebar-container {
            background-color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50px;
            .style-scope{
                margin-top: 20px;
            }
            .sidebar-item a {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 50px;
                height: 50px;
                text-decoration: none;
                color: black;
                .avatar{
                    width: 40px;
                    height: 40px;
                }
                .icon {
                    width: 30px;
                    height: 30px;
                }
                .label {
                    font-size: var(--v_xsm);
                }
            }
            .active {
                background-color: white;
            }
        }
    }
}
</style>