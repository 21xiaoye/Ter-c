import type {
  ActEnum,
  IsYetEnum,
  MarkEnum,
  MsgEnum,
  OnlineEnum,
  RoomTypeEnum,
  SexEnum,
} from '../enums'

export type LoginResponse = {
    token: string;
    tokenType: string;
};

export type UserInfoType = {
  /** 用户唯一标识 */
  uid: number
  /** 用户头像 */
  avatar: string
  /** 用户名 */
  name: string
}

/**
 * 用户收藏的表情包列表
 */
export type EmojiItem = {
  expressionUrl: string
  id: number
}
/**
 * 消息返回体
 */
export type MessageType = {
  /** 发送者信息 */
  fromUser: MsgUserType
  /** 消息主体 */
  message: MsgType
  /** 发送时间 */
  sendTime: string
  /** 时间段（可选） */
  timeBlock?: string
  /** 是否加载中 */
  loading?: boolean
}

export type CacheUserItem = {
  /** 是否需要更新数据源。 */
  needRefresh?: boolean
  /** 最后更新时间 更新超过 10 分钟异步去更新。 */
  lastModifyTime: number
  /** 归属地 */
  locPlace: string
  /** 头像 */
  avatar: string
  /** 用户名称 */
  name: string
  /** uid */
  uid: number
}

/**
 * 消息中用户信息
 */
export type MsgUserType = {
  /** 用户ID */
  uid: number
  /** 用户名 */
  username: string
  /** 头像 */
  avatar: string
  /** 归属地 */
  locPlace: string
  /** 徽章 */
  // badge?: {
  //   /** 徽章地址 */
  //   img: string
  //   /** 描述 */
  //   describe: string // 描述
  // }
}

/**
 * 消息互动信息
 */
export type MessageMarkType = {
  /** 点赞 */
  userLike: number
  /** 举报 */
  userDislike: number
  /** 点赞数 */
  likeCount: number
  /** 举报数 */
  dislikeCount: number
}

/**
 * 图片消息体
 */
export type ImageBody = {
  size: number,
  url: string
  width: number
  heignt: number
}

/**
 * 语音消息体
 */
export type VoiceBody = {
  size: number,
  second: number
  url: string
}

/**
 * 视频消息体
 */
export type VideoBody = {
  size: number
  url: string
  thumbSize?:number
  thumbWidth?:number
  thumbHeigh?:number
  thumbUrl?:string
}

/**
 * 文件消息体
 */
export type FileBody = {
  size:number
  fillName:string
  url:string
}

/**
 * 文本消息体
 */
export type TextBody = {
  content: string
  reply: ReplyType

  urlContentMap: Record<
    string,
    {
      title: string
      description: string,
      image:string
    }
  >
}

/**
 * 表情消息
 */
export type EmojiBody = {
  url: string
}

/**
 * 消息内容
 */
export type MsgType ={
  id: number
  roomId: number
  type:MsgEnum
  body: TextBody | ImageBody | VoiceBody | VideoBody | FileBody | EmojiBody | any
  sendTime:number
  messageMark:MessageMarkType
}

export type ReplyType ={
  id: number
  userName: string
  type: MsgEnum
  body: any,
  /**
   * 是否可进行跳转
   * @enum {number} `0` 否 `1` 是
   */
  canCallback: number
  gapCount: number
}

/**
 * 发送消息载体
 */
export type MessageReq = {
  roomId:number
  msgType: MsgEnum
  body:{
    content?:string
    replyMsgId?:number
    [key: string]:any
  }
}