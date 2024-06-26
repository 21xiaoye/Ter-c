import {
    LoginInitResType,
    WsReqMsgContentType,
    WsResponseMessageType,
    emailBindingResType,
    LoginSuccessResType
} from './wsType';

import { useUserStore } from '../stores/user'
import { useChatStore } from '../stores/chat';
import shakeTitle from './shakeTitle';
import { worker } from './initWorker';
import { computedToken } from '../services/request'
import { useWsLoginStore,LoginStatus } from '../stores/ws';
import { swichRouter } from '../main';
import { ElMessage } from 'element-plus';


class WS{
    #tasks: WsReqMsgContentType[] = []
    #connectReady = false

    constructor(){
        this.initConnect();
        worker.addEventListener('message',this.onWorkerMsg);

        document.addEventListener('visibilitychange',()=>{
            if(!document.hidden && !this.#connectReady){
                this.initConnect();
            }
            if(!document.hidden){
                shakeTitle.clear();
            }
        })
    }

    initConnect = () =>{
        const token = localStorage.getItem('TOKEN');

        if(token === null && localStorage.getItem('USER_INFO')){
            localStorage.removeItem('USER_INFO');
        }
        worker.postMessage(`{"type":"initWS", "value":${token ? `"${token}"`: null}}`)
    }

    onMessage = (value: string)=>{  
        const params:{type:WsResponseMessageType; data:unknown} = JSON.parse(value);
        const loginStore = useWsLoginStore();
        const userStore = useUserStore()
        const chatStore = useChatStore();
        switch(params.type){
            // 获取登录二维码
            case WsResponseMessageType.LoginQrCode:{
                const data = params.data as LoginInitResType;
                loginStore.loginQrCode = data.loginUrl;
                break;
            }
            // 等待授权
            case WsResponseMessageType.WaitingAuthorize:{
                loginStore.loginStatus = LoginStatus.Waiting;
                break;
            }
            // 绑定邮箱
            case WsResponseMessageType.EmailBinding:{
                const data = params.data as emailBindingResType;
                loginStore.openId = data.openId;
                loginStore.loginStatus = LoginStatus.Binding;
                break;
            }
            case WsResponseMessageType.LoginSuccess:{     
                const {token,...rest} = params.data as LoginSuccessResType;
                userStore.userInfo = { ...userStore.userInfo, ...rest}
                localStorage.setItem('USER_INFO', JSON.stringify(rest));
                localStorage.setItem('TOKEN', token);
                // 更强token
                computedToken.clear();
                computedToken.get();
                
                userStore.isSign = true;
                loginStore.loginStatus = LoginStatus.Success;
                loginStore.showLogin = false
                loginStore.loginQrCode = undefined;
                swichRouter('/chat');
                ElMessage({
                    message: '登录成功',
                    type: 'success',
                    plain:true
                })
                // 获取用户详情
                userStore.getUserDetailAction();
                console.log("获取到用户详情",userStore.userInfo);
                // 获取会话列表
                chatStore.getSessionList(true);
                break;
            }
            case WsResponseMessageType.TokenExpired:{
                userStore.isSign = false
                userStore.userInfo = {}
                localStorage.removeItem('USER_INFO')
                localStorage.removeItem('TOKEN')
                loginStore.loginStatus = LoginStatus.Init
                ElMessage({
                    message: '登录已过期,请重新登录',
                    type: 'warning',
                    plain:true
                })
            }
            case WsResponseMessageType.ReceiveMessage:{
                console.log("收到新消息",params);
                
            }
        }
    }

    onWorkerMsg = (e:MessageEvent<any>)=>{
        const params:{type:string; value:unknown} = JSON.parse(e.data);
        switch(params.type){
            case 'message':{
                this.onMessage(params.value as string);
                break;
            }
            case 'open':{
                this.#dealTasks();
                break;
            }
            case 'close':
            case 'error':{
                this.#onClose();
                break;
            }
            default: {
                console.log('接收到未处理类型的消息:', params)
                break
            }
        }
    }

    #onClose = () =>{
        this.#connectReady = false;
    }

    #dealTasks = () =>{
        this.#connectReady = true;
        setTimeout(()=>{
            const userStore = useUserStore();
            const loginStore = useWsLoginStore();
            if(userStore.isSign){
                this.#tasks.forEach((task)=>{
                    this.send(task);
                })
                this.#tasks = [];
            }else{              
                loginStore.loginQrCode && loginStore.getLoginQrCode();
            }
        },500);
    }

    #send(msg: WsReqMsgContentType){
        worker.postMessage(
            `{"type":"message","value":${typeof msg === 'string' ? msg : JSON.stringify(msg)}}`,
        )
    }
    send = (params:WsReqMsgContentType)=>{
        if(this.#connectReady){
            this.#send(params);
        }else{
            this.#tasks.push(params);
        }
    }
}

export default new WS()