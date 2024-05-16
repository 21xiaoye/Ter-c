import {
    LoginInitResType,
    WsReqMsgContentType,
    WsResponseMessageType
} from './wsType';

import { useUserStore } from '../stores/user'
import shakeTitle from './shakeTitle'
import { worker } from './initWorker';
import { useWsLoginStore } from '../stores/ws';


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
        switch(params.type){
            case WsResponseMessageType.LoginQrCode:{
                const data = params.data as LoginInitResType;
                break;
            }
            case WsResponseMessageType.WaitingAuthorize:{
                break;
            }
            case WsResponseMessageType.LoginSuccess:{

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