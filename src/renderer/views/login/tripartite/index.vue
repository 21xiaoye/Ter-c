<script setup lang="ts">
import { computed, watchEffect, ref } from 'vue';
import { useWsLoginStore, LoginStatus } from '../../../stores/ws';
import Qrcode from 'qrcode.vue';
import { swichRouter } from '../../../main';
import SendEmailCode from '../../../components/sendEmailCode.vue';
import emailCode from '../../../components/emailCode.vue';
const loginStore = useWsLoginStore();
const loginQrCode = computed(() => loginStore.loginQrCode);
const loginStatus = computed(() => loginStore.loginStatus);
const isShow = ref(true);

/**
 * 关闭微信登录窗口，返回到登录页面
 */
const tripartiteClose = () => {
    loginStore.showLogin = false;
    isShow.value = true;
    loginStore.resetLoginState();
    swichRouter('/login');
}

const visivle = computed({
    get() {
        return loginStore.showLogin;
    },
    set(value) {
        loginStore.showLogin = value;
    }
});
/**
 * 重新获取登录二维码
 */
const resetQrCode = () => {
    loginStore.getLoginQrCode();
}

/**
 * 控制邮箱发送、验证码填写页面呈现
 */
const sendCode = () =>{
    isShow.value = !isShow.value;
}

watchEffect(() => {
    if (visivle.value && !loginQrCode.value) {
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
                    <div style="width:328px;height: 328px;" v-if="loginStatus !== LoginStatus.Binding">
                        <Qrcode class="login-qrcode" v-if="loginQrCode" :value="loginQrCode" :size="328" :margin="5" />
                    </div>
                    <div v-if="loginStatus === LoginStatus.Binding" class="form-container">
                        <SendEmailCode @close="sendCode" :open="isShow" />
                        <emailCode @close="sendCode" :open="!isShow" />
                    </div>
                </div>
                <p class="login-desc" v-if="loginStatus === LoginStatus.Init">
                    使用「<strong class="login-desc-bold">微信</strong>」扫描二维码登录~~
                </p>
                <p class="login-desc" v-if="loginStatus === LoginStatus.Binding">
                    扫码成功~,"绑定邮箱"完成登录
                </p>
                <p class="login-desc" v-if="loginStatus === LoginStatus.Waiting">
                    扫码成功~，点击“登录”继续登录
                </p>
                <button class="exitBtn" @click="tripartiteClose">×</button>
                <p class="resendNote">验证码失效?<button class="resendBtn" @click="resetQrCode">重新获取</button></p>
            </div>
        </div>
    </div>
</template>


<style lang="less" src="./tripartite.less" scoped>
</style>