import {ref} from 'vue'
import { defineStore } from 'pinia'

import wsIns from '../util/websocket'
import { WsRequestMsgType } from '../util/wsType'

export enum LoginStatus {
    Init,
    Waiting,
    Success,
}

export const useWsLoginStore = defineStore('wsLogin',()=>{
    const loginQrCode = ref<string>()
    const showLogin = ref(false)
    const loginStatus = ref(LoginStatus.Init)
    
    function getLoginQrCode(){
        wsIns.send({type: WsRequestMsgType.RequestLoginQrCode})
    }

    function resetLoginState(){
        loginQrCode.value = undefined;
        loginStatus.value = LoginStatus.Init;
    }

    return{
        loginQrCode,
        loginStatus,
        showLogin,
        resetLoginState,
        getLoginQrCode
    }
})