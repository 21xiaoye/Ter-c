<script setup lang="ts">
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const isShow  = ref(true);
import SendEmailCode from '../../components/sendEmailCode.vue';
import EmailCode from '../../components/emailCode.vue';
const switchRouter = (path:string)=>{
    router.push(path);
}
const handleSubmit = () => {
    isShow.value = !isShow.value;
};

</script>

<template>
    <div class="ter-con">
        <div class="ter-got">
            <div class="form-container" v-if="isShow">
                <span @click="switchRouter('/login')">
                    <el-icon>
                        <ArrowLeftBold style="width: 20px;" />
                    </el-icon>
                </span>

                <div class="logo-container">
                    忘记密码
                </div>

                <SendEmailCode @close="handleSubmit" />

                <p class="signup-link">
                    没有账户? 前去
                    <a class="signup-link link" @click="switchRouter('/register')">注册</a>
                </p>
            </div>
            <div class="ter-email-code">
                <EmailCode @close="handleSubmit" v-if="!isShow" />
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.ter-con {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(#ffffff 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;
    .ter-got {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        .form-container {
            max-width: 600px;
            background-color: #fff;
            padding: 32px 24px;
            font-size: 14px;
            font-family: inherit;
            color: #212121;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
            .logo-container {
                text-align: center;
                font-weight: 600;
                font-size: 18px;
            }
            .link {
                color: #1778f2;
                text-decoration: none;
            }
            .signup-link {
                align-self: center;
                font-weight: 500;
            }
        }
        .form-container button:active {
            scale: 0.95;
        }
    }
}

.form-container .signup-link .link {
    font-weight: 400;
}

.form-container .link:hover {
    text-decoration: underline;
}
</style>