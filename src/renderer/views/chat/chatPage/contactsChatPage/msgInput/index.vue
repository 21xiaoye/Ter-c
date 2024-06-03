<script setup lang="ts">
import { ref } from 'vue'
import apis from '../../../../../services/apis';
import {
    MsgEnum
} from '../../../../../enums/index'
import { useChatStore } from '../../../../../stores/chat';
import { useUserStore } from '../../../../../stores/user';

const textarea = ref('');
const chatStore = useChatStore();
const userStore = useUserStore();

const send = (messageType: MsgEnum, body: any) => {
  apis
    .sendMsg({ roomId: 1795641785222041600, messageType, body })
    .send()
    .then((res) => {
        console.log(res);
    })
}

const textSend =async ()=>{
    console.log("开始发送消息legwe",textarea.value);
    
    // send(MsgEnum.TEXT,{
    //     content:textarea.value
    // });

    // chatStore.getSessionList(true);
    const params = { uidList: [1,15] };
    await apis.createGroup(params);
}
</script>

<template>
    <div class="chat-msg">
        <div class="msg-input">
            <textarea v-model="textarea" class="text" />
        </div>
        <div class="msg-btn">
            <button>
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <span @click="textSend">发送</span>
            </button>
        </div>
    </div>
</template>

<style scoped lang="less" src="./styles.less"/>