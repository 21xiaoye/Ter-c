import { useRouter } from "vue-router";
const router  = useRouter();
/**
 * 切换路由
 */
namespace GlobalCommonApi {
    export function swichRouter(path:string){
        console.log("sqsq");
        
        router.push(path);
    }
}


window.globalCommonAPI = GlobalCommonApi