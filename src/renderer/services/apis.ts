import { alovaIns } from "./request";
import { LoginResponse ,UserInfoType} from "./types"
import urls from "./urls";

const getRequest = <T>(url: string, config?:any) => alovaIns.Get<T>(url,{...config,localCache:0});
const postRequest = <T>(url: string, params?:any) => alovaIns.Post<T,unknown>(url, params);
const putRequest = <T>(url: string, params?:any) => alovaIns.Put<T, unknown>(url, params);
const deleteRequest = <T>(url: string, params?:any) => alovaIns.Delete<T, unknown>(url, params);

export default{
    sendEmailCode:(params: { email: string; openId: string;})=> getRequest<void>(urls.sendEmailCode, {params}),
    emailBinding:(data: {email:string, openId:string, code: string}) => postRequest<void>(urls.emailBinding,data),
    userLogin:(data: {userEmail:string, userPasswd: string, rememberMe:boolean}) => postRequest<LoginResponse>(urls.userLogin, data),
    userRegister:(data:{userEmail:string, userPasswd:string}) => postRequest<void>(urls.userRegister, data),

    updateAvatar:(params:{uid: string}) => getRequest<void>(urls.updateAvatar,{params}),
      /** 获取用户详细信息 */
    getUserDetail: () => getRequest<UserInfoType>(urls.getUserInfoDetail, {}),
}
