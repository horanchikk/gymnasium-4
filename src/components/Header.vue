<template>
  <div v-show="isFixed" class="mt-[294px]"></div>
  <header
    v-if="type === 'welcome'"
    class="w-full flex items-center justify-between p-[30px]"
  >
    <img :src="'./icon.svg'" alt="icon" class="hover:scale-110 transition-all showLeft" />
    <div class="flex gap-[21px]">
      <router-link to="/home"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px] showRight"
          style="animation-delay: 0ms;"
          >Главная</Button
        ></router-link
      >
      <router-link to="/news"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px] showRight"
          style="animation-delay: 50ms;"
          
          >Новости</Button
        ></router-link
      >
      <router-link to="/about"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px] showRight"
          style="animation-delay: 100ms;"
          >О нас</Button
        ></router-link
      >
      <router-link to="/learn"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px] showRight"
          style="animation-delay: 150ms;"
          >Обучение</Button
        ></router-link
      >
    </div>
  </header>
  <header
    v-else-if="type === 'home'"
    class="w-full flex gap-[33px] pl-[35px] pr-[66px] py-[45px] showBottom"
    :class="{ 'fixed top-0 left-0 bg-white show z-30': isFixed }"
  >
    <img
      @click="$router.go(-1)"
      class="cursor-pointer hover:scale-105 duration-200"
      :src="'./left-arrow.svg'"
      alt="left-arrow"
    />
    <div
      class="flex-auto flex gap-[154px] rounded-[22px] shadow-custom justify-center items-center py-[48px]"
    >
      <router-link to="/news"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Новости</Button
        ></router-link
      >
      <router-link to="/about"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >О нас</Button
        ></router-link
      >
      <router-link to="/learn"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Обучение</Button
        ></router-link
      >
      <p class="text-[72px] text-[#7B1CF4] pl-[67px]">Главная</p>
    </div>
  </header>
  <header
    v-else-if="type === 'news'"
    class="w-full flex gap-[33px] pl-[35px] pr-[66px] py-[45px] showBottom"
    :class="{ 'fixed top-0 left-0 bg-white show z-30': isFixed }"
  >
    <img
      @click="$router.go(-1)"
      class="cursor-pointer hover:scale-105 duration-200"
      :src="'./left-arrow.svg'"
      alt="left-arrow"
    />
    <div
      class="flex-auto flex gap-[154px] rounded-[22px] shadow-custom justify-center items-center py-[48px]"
    >
      <router-link to="/home"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Главная</Button
        ></router-link
      >
      <router-link to="/about"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >О нас</Button
        ></router-link
      >
      <router-link to="/learn"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Обучение</Button
        ></router-link
      >
      <p class="text-[72px] text-[#7B1CF4] pl-[67px]">Новости</p>
    </div>
  </header>
  <header
    v-else-if="type === 'learn'"
    class="w-full flex gap-[33px] pl-[35px] pr-[66px] py-[45px] showBottom"
    :class="{ 'fixed top-0 left-0 bg-white show z-30': isFixed }"
  >
    <img
      @click="$router.go(-1)"
      class="cursor-pointer hover:scale-105 duration-200"
      :src="'./left-arrow.svg'"
      alt="left-arrow"
    />
    <div
      class="flex-auto flex gap-[154px] rounded-[22px] shadow-custom justify-center items-center py-[48px]"
    >
      <router-link to="/home"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Главная</Button
        ></router-link
      >
      <router-link to="/news"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Новости</Button
        ></router-link
      >
      <router-link to="/about"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >О нас</Button
        ></router-link
      >
      <p class="text-[72px] text-[#7B1CF4] pl-[67px]">Обучение</p>
    </div>
  </header>
  <header
    v-else-if="type === 'about'"
    class="w-full flex gap-[33px] pl-[35px] pr-[66px] py-[45px] showBottom"
    :class="{ 'fixed top-0 left-0 bg-white show z-30': isFixed }"
  >
    <img
      @click="$router.go(-1)"
      class="cursor-pointer hover:scale-105 duration-200"
      :src="'./left-arrow.svg'"
      alt="left-arrow"
    />
    <div
      class="flex-auto flex gap-[154px] rounded-[22px] shadow-custom justify-center items-center py-[48px]"
    >
      <router-link to="/home"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Главная</Button
        ></router-link
      >
      <router-link to="/news"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Новости</Button
        ></router-link
      >
      <router-link to="/learn"
        ><Button
          :selected="true"
          :rounded="false"
          :shadow="false"
          class="w-[242px] py-[17px] text-[37px]"
          >Обучение</Button
        ></router-link
      >
      <p class="text-[72px] text-[#7B1CF4] pl-[67px]">О нас</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from "./public/Button.vue";
import { ref, watch } from "vue";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const isFixed = ref(false);

watch(
  () => y.value,
  () => (y.value > 294 ? (isFixed.value = true) : (isFixed.value = false))
);
defineProps<{
  type: "welcome" | "news" | "home" | "about" | "learn";
}>();
</script>

<style scoped>
@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(-300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.shadow-custom {
  box-shadow: -1px 2px 56.5px 7px rgba(157.25, 157.25, 157.25, 0.6);
}

.show {
  animation: show ease-out 200ms;
  animation-fill-mode: forwards;
}
</style>
