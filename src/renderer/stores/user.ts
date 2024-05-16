import {ref} from 'vue'
import { defineStore } from 'pinia'
import { UserInfoType } from '../services/types';
export const useUserStore = defineStore('user',()=>{
    const userInfo = ref<Partial<UserInfoType>>({});
    const isSign = ref(false);

    let localUserInfo = {}
    try{
        localUserInfo = JSON.parse(localStorage.getItem('USER_INFO')|| '{}')
    }catch(error){
        localUserInfo = {}
    }

    if(!Object.keys(userInfo.value).length && Object.keys(localUserInfo).length){
        userInfo.value = localUserInfo;
    }

    function getUserDetailAction(){
        console.log('发送请求获取用户详细信息');
    }

    return {userInfo, isSign, getUserDetailAction}
})