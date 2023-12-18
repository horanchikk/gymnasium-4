<template>
  <Header type="news" />
  <div class="w-full flex flex-col gap-[100px] mb-[100px]">
    <div class="w-full flex justify-between px-[70px] showLeft">
      <Button
        class="w-[438px] text-[40px]"
        style="height: 138px;"
        :rounded="true"
        :shadow="'purple'"
        :selected="true"
        >Спорт</Button
      >
      <Button
        class="w-[438px] text-[40px]"
        style="height: 138px;"
        :rounded="true"
        :shadow="'purple'"
        :selected="false"
        >Мероприятия</Button
      >
      <Button
        class="w-[438px] text-[40px]"
        style="height: 138px;"
        :rounded="true"
        :shadow="'purple'"
        :selected="false"
        >Важное</Button
      >
    </div>
    <div class="grid grid-cols-2 grid-rows-3 px-[116px] gap-[128px]">
      <div class="relative w-full h-full flex flex-col gap-[15px] items-center showTop" style="animation-delay: 200ms;">
        <img
          class="rounded-[50px]"
          :src="`./photo1.png`"
          alt="photo1"
          width="780"
          height="424"
        />
        <p
          class="absolute top-5 left-5 h-fit font-mont text-[25px] text-white font-semibold w-[600px]"
        >
          С 16 по 17 ноября на базе гимназии 4 прошли Президентские спортивные
          игры.
        </p>
        <Button
          shadow="dark"
          :rounded="true"
          :selected="true"
          class="w-[652px] h-[108px] text-[40px]"
          >Читать</Button
        >
      </div>
      <div class="relative w-full h-full flex flex-col gap-[15px] items-center showTop" style="animation-delay: 200ms;">
        <img
          class="rounded-[50px]"
          :src="`./photo2.png`"
          alt="photo2"
          width="780"
          height="424"
        />
        <p
          class="absolute top-5 left-5 h-fit font-mont text-[25px] text-white font-semibold w-[600px]"
        >
          Турнир «День призывника».
        </p>
        <Button
          shadow="dark"
          :rounded="true"
          :selected="true"
          class="w-[652px] h-[108px] text-[40px]"
          >Читать</Button
        >
      </div>
      <div class="relative w-full h-full flex flex-col gap-[15px] items-center showTop" style="animation-delay: 200ms;">
        <img
          class="rounded-[50px]"
          :src="`./photo3.png`"
          alt="photo3"
          width="780"
          height="424"
        />
        <p
          class="absolute top-5 left-5 h-fit font-mont text-[25px] text-white font-semibold w-[600px]"
        >
          «Осенние старты».
        </p>
        <Button
          shadow="dark"
          :rounded="true"
          :selected="true"
          class="w-[652px] h-[108px] text-[40px]"
          >Читать</Button
        >
      </div>
      <div class="relative w-full h-full flex flex-col gap-[15px] items-center showTop" style="animation-delay: 200ms;">
        <img
          class="rounded-[50px]"
          :src="`./photo4.png`"
          alt="photo4"
          width="780"
          height="424"
        />
        <p
          class="absolute top-5 left-5 h-fit font-mont text-[25px] text-white font-semibold w-[600px]"
        >
          Президентские спортивные игры.
        </p>
        <Button
          shadow="dark"
          :rounded="true"
          :selected="true"
          class="w-[652px] h-[108px] text-[40px]"
          >Читать</Button
        >
      </div>
      <div class="relative w-full h-full flex flex-col gap-[15px] items-center showTop" style="animation-delay: 200ms;">
        <img
          class="rounded-[50px]"
          :src="`./photo5.png`"
          alt="photo5"
          width="780"
          height="424"
        />
        <p
          class="absolute top-5 left-5 h-fit font-mont text-[25px] text-white font-semibold w-[600px]"
        >
          Турнир по Стритболу.
        </p>
        <Button
          shadow="dark"
          :rounded="true"
          :selected="true"
          class="w-[652px] h-[108px] text-[40px]"
          >Читать</Button
        >
      </div>
      <div class="relative w-full h-full flex flex-col gap-[15px] items-center showTop" style="animation-delay: 200ms;">
        <img
          class="rounded-[50px]"
          :src="`./photo6.png`"
          alt="photo6"
          width="780"
          height="424"
        />
        <p
          class="absolute top-5 left-5 h-fit font-mont text-[25px] text-white font-semibold w-[600px]"
        >
          Спорт. «ДОСТИГАЙ И ПОБЕЖДАЙ!»
        </p>
        <Button
          shadow="dark"
          :rounded="true"
          :selected="true"
          class="w-[652px] h-[108px] text-[40px]"
          >Читать</Button
        >
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/public/Button.vue";
</script>

<style>
.font-mont {
  font-family: "Montserrat Alternates";
  font-weight: 600;
}
</style>
