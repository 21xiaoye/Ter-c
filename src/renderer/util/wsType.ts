import { UserInfoType } from "../services/types"
export enum WsResponseMessageType {
    LoginQrCode = 1, // 获取登录二维码
    WaitingAuthorize, // 扫码成功，等待授权
    EmailBinding, // 扫码成功，未查询到微信用户注册信息，进行邮箱绑定完成注册
    LoginSuccess, // 登录成功
    TokenExpired,
    ReceiveMessage,
    OnOffLine,
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
export type emailBindingResType = {openId : string}
export type LoginSuccessResType = Pick<UserInfoType, 'avatar' | 'name' | 'uid'> & {
  /** 用户的登录凭证，每次请求携带 */
  token: string,
}

// export type EmailBindingResType = { loginCode:  }

// export type LoginSuccessResType =

// export type OnStatusChangeType = {
    
// }