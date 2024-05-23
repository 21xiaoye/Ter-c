<script setup lang="ts">
import { LoginSuccessResType } from '../../util/wsType'
import { ElMessage } from 'element-plus'
import {ref} from 'vue'
import { swichRouter } from '../../main';
import { useWsLoginStore } from '../../stores/ws';
import apis from '../../services/apis';

const loginStore = useWsLoginStore();
const email = ref<string>('');
const passwd = ref<string>('');
const rememberMe = ref<boolean>(false);

const switchRouter = (path:string)=>{
    loginStore.showLogin = true;
    swichRouter(path);
}
const handleSubmit = async ()=>{
    const data = await apis
        .userLogin({ userEmail: email.value, userPasswd: passwd.value, rememberMe:rememberMe.value}) 
        .send();
    const { token, ...rest } = data;
    localStorage.setItem("TOKEN", token);
    window.electronAPI.closeLoginAndRegisterWinwod();
}

</script>

<template>
    <div class="ter-con">
        <div class="ter-log">
            <div class="form">
                <div class="flex-column">
                    <label>邮箱 </label>
                </div>
                <div class="inputForm">
                    <img src="/email.svg" />
                    <input type="text" class="input" placeholder="输入你的邮箱" v-model="email">
                </div>

                <div class="flex-column">
                    <label>密码 </label>
                </div>
                <div class="inputForm">
                    <img src="/passwd.svg" />
                    <input type="password" class="input" placeholder="输入你的密码" v-model="passwd">
                    <img src="/watch.svg" />
                </div>

                <div class="flex-row">
                    <div>
                        <input type="checkbox" v-model="rememberMe">
                        <label> 记住你的账户 </label>
                    </div>
                    <span class="span" @click="switchRouter('/forgot')">忘记密码?</span>
                </div>
                <button class="button-submit" @click="handleSubmit">登 录</button>
                <p class="p"> 没有账户? 前去<span class="span" @click="switchRouter('/register')">注册</span>
                </p>
                <p class="p line">或者</p>

                <div class="flex-row">
                    <button class="btn apple" @click="switchRouter('/tripartite')">
                        <img src="/wx.svg" />
                        微信
                    </button>
                    <button class="btn google" @click="switchRouter('/tripartite')">
                        <img src="/google.svg" />
                        Google
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="less" src="./login.less" scoped>
</style>