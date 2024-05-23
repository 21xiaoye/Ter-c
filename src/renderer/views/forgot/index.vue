<script setup lang="ts">
import { swichRouter } from '../../main';
import { ref } from 'vue'

const isShow = ref(true);
import SendEmailCode from '../../components/sendEmailCode.vue';
import EmailCode from '../../components/emailCode.vue';
const handleSubmit = () => {
    isShow.value = !isShow.value;
};

</script>

<template>
    <div class="ter-con">
        <div class="ter-got">
            <div class="form-container">
                <span @click="swichRouter('/login')">
                    <el-icon>
                        <ArrowLeftBold style="width: 20px;" />
                    </el-icon>
                </span>

                <div class="logo-container">
                    忘记密码
                </div>

                <SendEmailCode @close="handleSubmit" :open="isShow" />
                <EmailCode @close="handleSubmit" :open="!isShow" />

                <p class="signup-link">
                    没有账户? 前去
                    <a class="signup-link link" @click="swichRouter('/register')">注册</a>
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="less" src="./forgot.less" scoped>
</style>