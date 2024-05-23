<script setup lang="ts">
import { defineProps, toRefs, ref } from 'vue';
import { useWsLoginStore, } from '../stores/ws';
import { ElMessage } from 'element-plus';
const loginStore = useWsLoginStore();
import apis from '../services/apis'

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    }
});

const { open } = toRefs(props);
const loading = ref<boolean>(false);
const email = ref('');
const emit = defineEmits(['close']);

const handleSubmit = async () => {
    loginStore.email = email.value;
    loading.value = true;
    await apis
        .sendEmailCode({email:email.value, openId:loginStore.openId})
        .send()
        .then(()=>{
            ElMessage({
                message: "验证码已发送",
                type: 'success',
            })
            loading.value = false;
        });
        
    emit('close');
};
</script>

<template>
    <div class="form-container" v-if="open">
        <div class="form">
            <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" name="email" placeholder="输入你的电子邮箱" required v-model="email">
            </div>
            <button class="form-submit-btn" @click="handleSubmit">{{ loading ? " 发送中..." : "获取验证码"
                }}</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
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
}

.form-container button:active {
    scale: 0.95;
}

.form-container .logo-container {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
}

.form-container .form {
    display: flex;
    flex-direction: column;
}

.form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.form-container .form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-container .form-group input {
    width: 82%;
    padding: 12px 16px;
    border-radius: 6px;
    font-family: inherit;
    border: 1px solid #ccc;
}

.form-container .form-group input::placeholder {
    opacity: 0.5;
}

.form-container .form-group input:focus {
    outline: none;
    border-color: #1778f2;
}

.form-container .form-submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: #fff;
    background-color: #212121;
    border: none;
    width: 100%;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin: 12px 0;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container .form-submit-btn:hover {
    background-color: #313131;
}

.form-container .link {
    color: #1778f2;
    text-decoration: none;
}

.form-container .signup-link {
    align-self: center;
    font-weight: 500;
}

.form-container .signup-link .link {
    font-weight: 400;
}

.form-container .link:hover {
    text-decoration: underline;
}
</style>