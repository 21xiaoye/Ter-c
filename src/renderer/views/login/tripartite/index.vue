<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useWsLoginStore, LoginStatus } from '../../../stores/ws';
import Qrcode from 'qrcode.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const loginStore = useWsLoginStore();
const loginQrCode = computed(()=>loginStore.loginQrCode);
const loginStatus = computed(()=>loginStore.loginStatus);
const toLogin = ()=>{
    router.push('/login');
}
const visivle = computed({
    get(){
        return loginStore.showLogin;
    },
    set(value){
        loginStore.showLogin = value;
    }
})

watchEffect(()=>{
    if(visivle.value && !loginQrCode.value){
        loginStore.getLoginQrCode();
    }
})
</script>
<template>
    <div class="ter-con">
        <div class="ter-tri">
            <div class="otp-Form">

                <span class="mainHeading">第三方登录</span>
                <p class="otpSubheading">使用微信扫码关注公众号完成登录</p>
                <div class="inputContainer">
                    <div style="width:328px;height: 328px;">
                        <Qrcode class="login-qrcode"
                            v-if="loginQrCode" 
                            :value="loginQrCode" 
                            :size="328" 
                            :margin="5"
                        />
                    </div>
                </div>
                <button class="verifyButton" type="submit">扫码登录</button>
                <button class="exitBtn" @click="toLogin">×</button>
                <p class="resendNote">验证码失效?<button class="resendBtn">重新获取</button></p>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.ter-con{
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(#ffffff 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;
    .ter-tri{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        .otp-Form {
            width: 400px;
            height: 500px;
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
        .verifyButton {
            width: 50%;
            height: 30px;
            border: none;
            background-color: rgb(127, 129, 255);
            color: white;
            font-weight: 600;
            border-radius: 10px;
            transition-duration: .2s;
        }
        .exitBtn{
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
    }
}
</style>