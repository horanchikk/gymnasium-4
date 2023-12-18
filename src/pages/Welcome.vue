<template>
    <div class="w-full h-screen flex flex-col justify-between overflow-hidden" :style="{background: `url(${background}) 100% 100%`}">
        <Header type="welcome"></Header>
        <div class="flex justify-between px-5">
            <div class="text-white w-[1000px] pb-[64px] pl-[32px] showTop">
                <h1 class="text-[100px]">Гимназия №4</h1>
                <p class="text-[40px]" style="font-weight: 300; letter-spacing: 8px; word-wrap: break-word;line-height: 50px;">Муниципальное автономное общеобразовательное учреждение</p>
            </div>
            <div class="flex gap-[31px] pb-5 items-end showTop" style="animation-delay: 400ms;">
                <img :src="'./vk.svg'" alt="vk"><img :src="`./instagram.svg`" alt="instagram">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import { ref } from 'vue';

const background = ref('');
import('../assets/background.png').then(el => background.value = el.default);
</script>