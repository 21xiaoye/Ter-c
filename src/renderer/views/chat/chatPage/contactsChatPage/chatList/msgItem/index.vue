<script setup lang="ts">
import { computed, inject, nextTick, onMounted, reactive, ref, type Ref, watch } from 'vue';
import { useUserStore } from '../../../../../../stores/user';
import type { TooltipTriggerType } from 'element-plus';
import { MsgEnum } from '../../../../../../enums';
import type { MessageType } from '../../../../../../services/types';
const props = withDefaults(
    defineProps<{
        msg: MessageType
        isShowTime?: boolean
        isShowTimeBlock?:boolean
        bubbleMode?:string
        tooltipTrigger?:TooltipTriggerType
    }>(),
    {
        isShowTime: true,
        isShowTimeBlock: true,
        bubbleMode:'spread',
        tooltipTrigger:() =>'hover',
    },
)

defineOptions({inheritAttrs:false})
const message = computed(() => props.msg.message)
const fromUser = computed(()=> props.msg.fromUser)
const isCurrentUser = computed(() => fromUser.value.uid === userStore?.userInfo.uid)
const chatCls = computed(() => ({
    'chat-item': true,
    'is-me': isCurrentUser.value,
    'right': (isCurrentUser.value && props.bubbleMode === 'spread') || props.bubbleMode === 'right',
}))
const userStore = useUserStore();

const msgVisibleEl = ref(null)
</script>

<template>
    <span v-if="msg.timeBlock" class="send-time-block">{{ msg.timeBlock }}</span>
    <span class="send-time-block">{{ message.body }}</span>

    <div ref='msgVisibleEl'>
        <Transition name="remove">
            <div :class="chatCls">
                <el-popover placement="right" trigger="hover">
                    <template #reference>
                        <!-- 用户头像 -->
                        <Avatar :src="userStore.userInfo.avatar"  />
                    </template>
                </el-popover>
            </div>
        </Transition>
    </div>

</template>

<style scoped lang="less" src="./styles.less"/>