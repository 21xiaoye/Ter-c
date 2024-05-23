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