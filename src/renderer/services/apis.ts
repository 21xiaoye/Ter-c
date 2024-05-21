import{
    responseType
} from './types'

import { alovaIns } from "./request";
import urls from "./urls";

const getRequest = <T>(url: string, config?:any) => alovaIns.Get<T>(url,{...config,localCache:0});
const postRequest = <T>(url: string, params?:any) => alovaIns.Post<T,unknown>(url, params);
const putRequest = <T>(url: string, params?:any) => alovaIns.Put<T, unknown>(url, params);
const deleteRequest = <T>(url: string, params?:any) => alovaIns.Delete<T, unknown>(url, params);

export default{
    sendEmailCode:(params: { email: string })=> {
        return getRequest<responseType>(urls.sendEmailCode, {params});
    } 
}
