// stores/card.js
import { defineStore } from 'pinia';
import { computed, reactive, ref, watch } from 'vue';
import apis from '../services/apis';

import {
    SessionItem
} from "../services/types"


export const pageSize = 20
// 标识是否第一次请求
let isFirstInit = false
export const useChatStore = defineStore('chat',()=> {
    const sessionList = reactive<SessionItem[]>([]) // 会话列表
    const sessionOptions = reactive({ isLast: false, isLoading: false, cursor: '' })
    const chatIndex = ref<number>();
    // const messageOptions = reactive<
    // Map<number, { isLast: boolean; isLoading: boolean; cursor: string }>
    // >(new Map([[currentRoomId.value, { isLast: false, isLoading: false, cursor: '' }]]))

    
  const getSessionList = async (isFresh = false) => {
    if (!isFresh && (sessionOptions.isLast || sessionOptions.isLoading)) return
    sessionOptions.isLoading = true
    const data = await apis
      .getSessionList({
        params: {
          pageSize: sessionList.length > pageSize ? sessionList.length : pageSize,
          cursor: isFresh || !sessionOptions.cursor ? undefined : sessionOptions.cursor,
        },
      })
      .send()
      .then(res=>{
            console.log(res);
      })
      .catch(() => {
        sessionOptions.isLoading = false
      })
  }

    return{
        chatIndex,
        getSessionList
    }
});