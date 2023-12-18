<template>
  <footer
    class="w-full flex flex-col gap-[130px] items-center text-white justify-between pt-[70px] px-[49px] bg-[#7B1CF4] shadow-xl shadow-black font-mont"
  >
    <div class="flex justify-between gap-[260px] text-[35px]">
      <div class="w-[816px]">
        <div class="flex justify-between">
          <p>Контактная информация:</p>
          <p>+7 (391) 613-28-79</p>
        </div>
        <div class="flex justify-between">
            <p>E-mail</p>
            <p>gimnakansk@yandex.ru</p>
        </div>
      </div>
      <div>
        <img :src="`./icon.svg`" width="164" height="164" alt="logo">
      </div>
      <div class="flex gap-[50px]">
        <img :src="`./vk.svg`" height="121" width="121" alt="vk">
        <img :src="`./instagram.svg`" height="121" width="121" alt="instagram">
      </div>
    </div>
    <p class="text-[25px] opacity-50">
      Copyright © 2016—2023 МАОУ Гимназия №4 г. Канска
    </p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>

.font-mont {
  font-family: "Montserrat Alternates";
  font-weight: 300;
}

</style>
