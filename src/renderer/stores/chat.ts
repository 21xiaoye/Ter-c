// stores/card.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useChatStore = defineStore('chat',()=> {
    const chatIndex = ref<number>();
    

    return{
        chatIndex,
    }
});