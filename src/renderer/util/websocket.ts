import type {
    LoginInitResType,
    WsReqMsgContentType
} from './wsType';

import { worker } from './initWorker';


class WS{
    #tasks: WsReqMsgContentType[] = []
    #connectReady = false

    constructor(){
        this.initConnect();
        // worker.addEventListener('message',this.)
    }

    initConnect = () =>{
        const token = localStorage.getItem('TOKEN');

        if(token === null && localStorage.getItem('USER_INFO')){
            localStorage.removeItem('USER_INFO');
        }

    }

    onWorkerMsg = (e: MessageEvent<any>)=>{
        const params:{type:string, value:unknown} = JSON.parse(e.data);

        switch(params.type){
            case 'message':{
                
            }
        }
    }

    onMessage = (value: string)=>{

    }
}