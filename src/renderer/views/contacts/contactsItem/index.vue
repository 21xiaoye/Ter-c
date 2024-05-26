<script setup lang="ts">
import { useUserStore } from '../../../stores/user';

const useStore = useUserStore();
</script>

<template>
    <div class="ter-contacts">
        <div class="contacts-item">
            <div class="card">
                <div class="smallIcon">
                    <div class="Icon">
                        <img :src="useStore.userInfo.avatar">
                    </div>
                    <div class="Name">
                        {{ useStore.userInfo.name }}
                    </div>
                    <div class="Roles">
                        <span>
                            <el-icon style="color:  var(--v_brand_blue);">
                                <Male />
                            </el-icon>
                        </span>
                        <span>
                            <el-icon>
                                <Star />
                            </el-icon>
                        </span>
                    </div>
                    <div class="Descripion">
                        <span>uid:<i>123456789</i></span>
                        <span>地区:<i>长沙</i></span>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<style scoped src="./styles.less" lang="less"/>