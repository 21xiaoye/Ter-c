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


<style lang="less" scoped>
.ter-con {
    width: 100vw;
    height: 100vh;
    /* Add your background pattern here */
    background-image: linear-gradient(#ffffff 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;

    .ter-reg {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.form button {
    align-self: flex-end;
}

.flex-column>label {
    color: #151717;
    font-weight: 600;
}

.inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
}

.input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 100%;
}

.input:focus {
    outline: none;
}

.inputForm:focus-within {
    border: 1.5px solid #2d79f3;
}


.span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
}

.button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
}

.button-submit:hover {
    background-color: #252727;
}

.p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
}

</style>