import { createAlova } from "alova";
import vueHook from "alova/vue";
import GlobalFetch from "alova/GlobalFetch";

function getToken(){
  let tempToken = ''
  return {
    get() {
      if (tempToken) return tempToken
      const token = localStorage.getItem('TOKEN')
      if (token) {
        tempToken = token
      }
      return tempToken
    },
    clear() {
      tempToken = ''
    },
  }
}

export const computedToken = getToken();
export const alovaIns = createAlova({
    baseURL:'',
    statesHook: vueHook,
    requestAdapter: GlobalFetch(),
    beforeRequest({config}){
            //  config.headers.Authorization = `Bearer ${computedToken.get()}`;
        config.headers['Content-Type'] = 'application/json; charset=utf-8';
    },

    responsed: async (response) => {
    const json = await response.json()
    if (json.status !== 200 || response.status !== 200) {       
      // 这边抛出错误时，将会进入请求失败拦截器内
      if (json.errMsg) {
        // 空 token 且 状态码 401 不弹提示
        if (!computedToken.get() && response.status === 401) {
          //
        } else {
            console.error(json.errMsg);
        }
        throw new Error(json.errMsg)
      } else {
        throw new Error(json.message)
      }
    }
    return json.data;
  },
})