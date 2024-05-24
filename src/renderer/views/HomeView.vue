<script setup lang="ts">
import { RouterView } from 'vue-router';
import navigation from '../components/navigation/index.vue'
import topNav from '../components/topNav/index.vue'
</script>


<template>
    <main class="ter-main">
        <div style="display: flex;">
            <navigation />
            <div>
                <topNav />
                <RouterView />
            </div>
        </div>
    </main>
</template>
