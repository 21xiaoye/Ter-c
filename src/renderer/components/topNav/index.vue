<script setup lang="ts">
import { ref } from 'vue';
const switchWindow = ref('0');
const operate = (type: string) => {
    switch (type) {
        case 'minimize': {
            window.electronAPI.minimize();
            break;
        }
        case 'maximize': {
            window.electronAPI.maximize();
            switchWindow.value = '1';
            break;
        }
        case 'unmaximize': {
            window.electronAPI.unmaximize();
            switchWindow.value = '0';
            break;
        }
        case 'close': {
            window.electronAPI.close();
            break;
        }
    }
}
</script>
<template>
    <div class="card">
        <div class="titlebar">
            <span class="buttons">
                <button class="icon" @click="operate('minimize')">
                    <svg x="0px" y="0px" viewBox="0 0 10.2 1">
                        <rect x="0" y="50%" width="10.2" height="1"></rect>
                    </svg>
                </button>

                <button class="icon" @click="operate('maximize')" v-show="switchWindow === '0'">
                    <svg viewBox="0 0 10 10">
                        <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
                    </svg>
                </button>

                <button class="icon" @click="operate('unmaximize')" v-show="switchWindow === '1'">
                    <svg viewBox="0 0 10 10">
                        <path d="M2,2v6h6V2H2z M1,1h8v8H1V1z M3,3h4v4H3V3z"></path>
                    </svg>
                </button>

                <button class="icon" @click="operate('close')">
                    <svg viewBox="0 0 10 10">
                        <polygon
                            points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1">
                        </polygon>
                    </svg>
                </button>
            </span>
        </div>
    </div>

</template>

<style lang="less" scoped src="./styles.less" />