<script setup lang="ts">
import {
    ContextMenu,
    type MenuOptions,
} from '@imengyu/vue3-context-menu';
import { MessageType } from '../../../../../../services/types';
import { ref } from 'vue';

const props = defineProps<{
    // 消息体
    msg: MessageType
    // 菜单设置-其它的参数透传
    options?: MenuOptions
}>()

const menuOptions = ref({
    theme: 'dark',
    x: 0,
    y: 0,
    ...props.options,
});
</script>


<template>
    <ContextMenu :options="menuOptions">
    </ContextMenu>
</template>

<style scoped lang="less" src="./styless.less"/>
