<script setup lang="ts">
import { computed, inject, nextTick, onMounted, reactive, ref, type Ref, watch } from 'vue';
import { useUserStore } from '../../../../../../stores/user';
import ContentMenu from '../contextMenu/index.vue'
import type { TooltipTriggerType } from 'element-plus';
import { MsgEnum } from '../../../../../../enums';
import type { MessageType } from '../../../../../../services/types';
import userCard from '../../../../../../components/userCard/index.vue';
// const props = withDefaults(
//     defineProps<{
//         msg: MessageType
//         isShowTime?: boolean
//         isShowTimeBlock?:boolean
//         bubbleMode?:string
//         tooltipTrigger?:TooltipTriggerType
//     }>(),
//     {
//         isShowTime: true,
//         isShowTimeBlock: true,
//         bubbleMode:'spread',
//         tooltipTrigger:() =>'hover',
//     },
// )

// 这里仅用来演示
const props = withDefaults(
    defineProps<{
        msgLocation:boolean
    }>(),{
        msgLocation:true,
    },
)

const msgLocation = computed(() => props.msgLocation);

defineOptions({inheritAttrs:false})
// const message = computed(() => props.msg.message)
// const fromUser = computed(()=> props.msg.fromUser)
// const isCurrentUser = computed(() => fromUser.value.uid === userStore?.userInfo.uid)
// 弹出定位
const menuOptions = ref({ x: 0, y: 0 })
const isShowMenu = ref(false); // 是否显示右键菜单
// const chatCls = computed(() => ({
//     'chat-item': true,
//     'is-me': isCurrentUser.value,
//     'right': (isCurrentUser.value && props.bubbleMode === 'spread') || props.bubbleMode === 'right',
// }))
const userStore = useUserStore();

const msgVisibleEl = ref(null)

const handleRightClick = (e: MouseEvent) => {
    // perf: 未登录时，禁用右键菜单功能
    // if (!userStore.isSign) {
    //     return
    // }

    // TODO：看它源码里提供了一个transformMenuPosition函数可以控制在容器范围内弹窗 我试验了一下报错
    // https://github.com/imengyu/vue3-context-menu/blob/f91a4140b4a425fa2770449a8be3570836cdfc23/examples/views/ChangeContainer.vue#LL242C5-L242C5
    const { x, y } = e

    menuOptions.value.x = x
    menuOptions.value.y = y
    isShowMenu.value = true;
}
</script>

<template>
    <!-- <span v-if="msg.timeBlock" class="send-time-block">{{ msg.timeBlock }}</span>
    <span class="send-time-block">{{ message.body }}</span> -->

    <div ref='msgVisibleEl'>
        <div class="chat-item" :class="{'right': msgLocation, 'left': !msgLocation}">
            <el-popover placement="right" trigger="click" :width="290">
                <template #reference>
                    <!-- 用户头像 -->
                    <el-avatar shape="square" :size="50" fit="fill" :src="userStore.userInfo.avatar"
                        class="chat-avatar" />
                </template>
                <userCard />
            </el-popover>
            <div class="chat-item-box">
                <div class="chat-item-user-info">
                    <!-- 用户名 -->
                    <span class="user-name">
                        {{ userStore.userInfo.name }}
                    </span>
                    <!-- 消息归属地 -->
                    <span class="user-ip">长沙</span>
                </div>
                <div class="chat-item-msg">
                    <div class="msg" @contextmenu.prevent.stop="handleRightClick($event)">
                        cqdqdwqdwqdqwdwqddwdqdqwdwqdfcwffweffefeqwddjqwcwedwdiwhdudhwudhhdwuhd
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="less" src="./styles.less"/>