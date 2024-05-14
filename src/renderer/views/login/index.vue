<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toRegister = ()=>{
    router.push('/register');
}

const toForGot = ()=>{
    router.push('/forgot')
}
</script>

<template>
    <div class="ter-con">
        <div class="ter-log">
            <form class="form">
                <div class="flex-column">
                    <label>邮箱 </label>
                </div>
                <div class="inputForm">
                    <img src="/email.svg" />
                    <input type="text" class="input" placeholder="输入你的邮箱">
                </div>

                <div class="flex-column">
                    <label>密码 </label>
                </div>
                <div class="inputForm">
                    <img src="/passwd.svg" />
                    <input type="password" class="input" placeholder="输入你的密码">
                    <img src="/watch.svg" />
                </div>

                <div class="flex-row">
                    <div>
                        <input type="checkbox">
                        <label> 记住你的账户 </label>
                    </div>
                    <span class="span" @click="toForGot">忘记密码?</span>
                </div>
                <button class="button-submit">登 录</button>
                <p class="p"> 没有账户? <span class="span" @click="toRegister">注册</span>
                </p>
                <p class="p line">或者</p>

                <div class="flex-row">
                    <button class="btn apple">
                        <img src="/wx.svg" />
                        微信
                    </button>
                    <button class="btn google">
                        <img src="/google.svg" />
                        Google
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang="less" scoped>
.ter-con{
    width: 100vw;
    height: 100vh;
    /* Add your background pattern here */
    background-image: linear-gradient(#ffffff 1.1rem, #ccc 1.2rem);
    background-size: 100% 1.2rem;
    .ter-log{
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

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
}

.flex-row>div>label {
    font-size: 14px;
    color: black;
    font-weight: 400;
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

.btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.btn:hover {
    border: 1px solid #2d79f3;
    ;
}
</style>