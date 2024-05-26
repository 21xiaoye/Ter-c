<script setup lang="ts">
import { computed, inject, nextTick, onMounted, reactive, ref, type Ref, watch } from 'vue';
import { useUserStore } from '../../../../../../stores/user';
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

defineOptions({inheritAttrs:false})
// const message = computed(() => props.msg.message)
// const fromUser = computed(()=> props.msg.fromUser)
// const isCurrentUser = computed(() => fromUser.value.uid === userStore?.userInfo.uid)
// const chatCls = computed(() => ({
//     'chat-item': true,
//     'is-me': isCurrentUser.value,
//     'right': (isCurrentUser.value && props.bubbleMode === 'spread') || props.bubbleMode === 'right',
// }))
const userStore = useUserStore();

const msgVisibleEl = ref(null)
</script>

<template>
    <!-- <span v-if="msg.timeBlock" class="send-time-block">{{ msg.timeBlock }}</span>
    <span class="send-time-block">{{ message.body }}</span> -->

    <div ref='msgVisibleEl'>
        <div class="chat-item" :class="{'right': false, 'left': true}">
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
                    <div class="msg">
                            cqdqdwqdwqdqwdwqddwdqdqwdwqdfcwffweffefeqwddjqwcwedwdiwhdudhwudhhdwuhd
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped lang="less" src="./styles.less"/>