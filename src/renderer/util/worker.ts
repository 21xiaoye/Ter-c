const postMsg = ({ type, value }: { type: string; value?: object }) => {
    self.postMessage(JSON.stringify({ type, value }));
};
let connection: WebSocket
let heartTimer: number | null = null
const reconnectCountMax = 100
let reconnectCount = 0 
let timer: null | number = null
let lockReconnect = false
let token: null | string = null

const connectionSend = (value : object)=>{
    connection?.send(JSON.stringify(value));
}

const sendHeartPack = ()=>{
    heartTimer = setInterval(()=>{
        connectionSend({type:2})
    },9900)
}

const clearHeartPackTimer = ()=>{
    if(heartTimer){
        clearInterval(heartTimer);
        heartTimer = null
    }
}

const onCloseHandler = () =>{
    clearHeartPackTimer();

    if(lockReconnect) return;

    lockReconnect = true;

    if(timer){
        clearTimeout(timer);
        timer = null
    }

    if(reconnectCount>= reconnectCountMax){
        reconnectCount = 0;
        return;
    }

    timer = setTimeout(()=>{
        initConnection();
        reconnectCount++;
        lockReconnect = false
    },2000)
}


const initConnection = () =>{
    connection?.removeEventListener('message',onConnectMsg)
    connection?.removeEventListener('open',onConnectOpen)
    connection?.removeEventListener('close',onConnectClose)
    connection?.removeEventListener('error',onConnectError)

    connection = new WebSocket(`${import.meta.env.VITE_WS_URL}${token ? `?token=${token}`: ''}`)
    connection.addEventListener('message',onConnectMsg)
    connection.addEventListener('open',onConnectOpen)
    connection.addEventListener('close',onConnectClose)
    connection.addEventListener('error',onConnectError)
}

const onConnectError = ()=>{
    onCloseHandler();
    postMsg({type:'error'})
}

const onConnectClose = ()=>{
    onCloseHandler()
    token = null
    postMsg({type:'close'})
}

const onConnectOpen = () =>{
    postMsg({type:'open'})
    sendHeartPack()
}

const onConnectMsg = (e:any)=> postMsg({type:'message',value:e.data})


self.onmessage = (e:MessageEvent<string>)=>{
    const {type, value} = JSON.parse(e.data)
    switch(type){
        case 'initWS':{
            reconnectCount = 0;
            token = value;
            initConnection();
            break;
        }
        case 'message':{
            if(connection?.readyState !==1) return;
            connectionSend(value);
            break;
        }
    }
}