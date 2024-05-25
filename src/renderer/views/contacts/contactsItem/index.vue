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
                        <span>
                            uid: 123456789
                        </span>
                    </div>
                    <div class="Roles">
                        <span>
                            <el-icon style="color:  var(--v_brand_blue);">
                                <Male />
                            </el-icon>
                        </span>
                        <span>
                            <el-icon>
                                <MoreFilled />
                            </el-icon>
                        </span>
                    </div>
                    <div class="Descripion">
                        鲜衣怒马少年时，一日看尽长安花
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