export enum WsResponseMessageType {
    LoginQrCode = 1,
    WaitingAuthorize,
    LoginSuccess,
    ReceiveMessage,
    OnOffLine,
    TokenExpired,
    InValidUser,
    WSMsgMarkItem,
    WSMsgRecall,
    NewFriendSession,
}


export enum WsRequestMsgType {
    RequestLoginQrCode = 1,
    HeartBeatDetection,
    Authorization
}

export type WsReqMsgContentType = {
    type: WsRequestMsgType
    data?: Record<string, unknown>
}

export type LoginInitResType = { loginUrl: string }

// export type LoginSuccessResType =

// export type OnStatusChangeType = {
    
// }