<script setup lang="ts">
import apis from '../../services/apis';
import {swichRouter} from '../../main'
import { ref } from 'vue';
const email = ref<string>('');
const passwd = ref<string>('');
const nextPasswd = ref<string>('');

const handleSubmit = ()=>{
    console.log("发送注册请求");
    
    if(passwd.value !== nextPasswd.value){
       console.log("两次密码不一致");
       return;
    }
    apis.userRegister({ userEmail: email.value, userPasswd: passwd.value }).send();
}

</script>

<template>
    <div class="ter-con">
        <div class="ter-reg">
            <div class="form" >
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
                <div class="flex-column">
                    <label>重复密码 </label>
                </div>
                <div class="inputForm">
                    <img src="/passwd.svg" />
                    <input type="password" class="input" placeholder="再次输入你的密码" v-model="nextPasswd">
                    <img src="/watch.svg" />
                </div>

                <button class="button-submit" @click="handleSubmit">注 册</button>
                <p class="p"> 已有账户,前去
                     <span class="span" @click="swichRouter('/login')">登录</span>
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="less" src="./register.less" scoped></style>