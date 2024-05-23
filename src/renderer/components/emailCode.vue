<script setup lang="ts">
import { defineProps, toRefs, ref } from 'vue';
import { useWsLoginStore, } from '../stores/ws';

import apis from '../services/apis'
const loginStore = useWsLoginStore();

const code = ref('');
const loading = ref<boolean>(false);
const props = defineProps({
    open: {
        type: Boolean,
        default: false 
    }
});

const { open } = toRefs(props);

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};
const handleSubmit = async ()=>{
    loading.value = true;
    await apis.
        emailBinding({ 
            email: loginStore.email, 
            openId: loginStore.openId, 
            code:code.value
        })
        .send()
        .then(()=>{
            loading.value = false;
        });
    close();
}
</script>

<template>
    <div class="otp-Form" v-if="open" v-loading="loading" element-loading-text="登陆中...">
        <span class="mainHeading">一次性验证码</span>
        <p class="otpSubheading">我们已将验证码发送至您的邮箱</p>
        <div class="inputContainer">
            <input required maxlength="8" type="text" class="otp-input" id="otp-input1" v-model="code">
        </div>
        <button class="verifyButton" type="submit" @click="handleSubmit"> 验证</button>
        <button class="exitBtn" @click="close">×</button>
        <p class="resendNote">没有收到验证码?<button class="resendBtn">重新发送</button></p>
    </div>
</template>


<style lang="less" scoped>
.otp-Form {
    max-width: 230px;
    max-height: 300px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    gap: 20px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.082);
    border-radius: 15px;
}

.mainHeading {
    font-size: 1.1em;
    color: rgb(15, 15, 15);
    font-weight: 700;
}

.otpSubheading {
    font-size: 0.7em;
    color: black;
    line-height: 17px;
    text-align: center;
}

.inputContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.otp-input {
    background-color: rgb(228, 228, 228);
    width: 100%;
    height: 30px;
    text-align: center;
    border: none;
    border-radius: 7px;
    caret-color: rgb(127, 129, 255);
    color: rgb(44, 44, 44);
    outline: none;
    font-weight: 600;
}

.otp-input:focus,
.otp-input:valid {
    background-color: rgba(127, 129, 255, 0.199);
    transition-duration: .3s;
}

.verifyButton {
    width: 100%;
    height: 30px;
    border: none;
    background-color: rgb(127, 129, 255);
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: .2s;
}

.verifyButton:hover {
    background-color: rgb(144, 145, 255);
    transition-duration: .2s;
}

.exitBtn {
    position: absolute;
    top: 5px;
    right: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.171);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: none;
    color: black;
    font-size: 1.1em;
    cursor: pointer;
}

.resendNote {
    font-size: 0.7em;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.resendBtn {
    background-color: transparent;
    border: none;
    color: rgb(127, 129, 255);
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 700;
}
</style>