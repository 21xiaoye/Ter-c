import {ref} from 'vue'
import { defineStore } from 'pinia'

import wsIns from '../util/websocket'
import { WsRequestMsgType } from '../util/wsType'

export enum LoginStatus {
    Init,
    Waiting,
    Binding,
    Success,
}

export const useWsLoginStore = defineStore('wsLogin',()=>{
    const loginQrCode = ref<string>(); // 登录二维码 
    const showLogin = ref(false); // 控制是否获取二维码
    const loginStatus = ref(LoginStatus.Init); // 登录扫码状态
    
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