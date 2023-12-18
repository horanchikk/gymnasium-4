<template>
  <Header type="home"></Header>
  <div class="w-full flex flex-col gap-[100px] mb-[100px]">
    <div class="w-full h-[768px] relative">
      <img
        src="../assets/background.png"
        alt="background"
        class="w-full h-[768px] object-cover"
      />
      <div
        class="flex flex-col justify-center items-center gap-[27px] text-white absolute top-0 left-0 w-full h-full font-mont"
      >
        <p class="text-[130px]">Добро пожаловать!</p>
        <p class="text-[41px]">1994-2023</p>
      </div>
    </div>
    <div class="w-full h-[368px] flex justify-between items-center" ref="section1" style="animation-delay: 300ms" :class="{'showRight': section1Visible, 'showLeft': !section1Visible}">
      <div class="flex items-center justify-center w-1/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="330"
          viewBox="0 0 48 48"
        >
          <path
            fill="#7b1df4"
            fill-rule="evenodd"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m10.742-26.33a1 1 0 1 0-1.483-1.34L21.28 29.567l-6.59-6.291a1 1 0 0 0-1.382 1.446l7.334 7l.743.71l.689-.762z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="w-3/4 py-10 text-[35px] px-[47px] font-mont rounded-l-3xl shadow-custom"
      >
        Гимназия - твой путь к знаниям и успеху! Наши высококвалифицированные
        преподаватели обеспечивают качественное обучение, а широкий спектр
        предметов и дополнительных занятий позволяет разносторонне развиваться.
      </div>
    </div>

    <div class="w-full h-[368px] flex justify-between items-center" ref="section2" style="animation-delay: 300ms" :class="{'showLeft': section2Visible, 'showRight': !section2Visible}">
      <div
        class="w-3/4 py-10 text-[35px] px-[47px] font-mont rounded-r-3xl shadow-custom"
      >
        Наши ученики – это не только отличники, но и творческие личности,
        готовые подниматься на новые вершины. Мы вдохновляем креативность,
        поощряем исследовательский подход к знаниям и поддерживаем всякое
        проявление таланта. У нас нет пределов для вашего развития!
      </div>
      <div class="flex items-center justify-center w-1/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="330"
          viewBox="0 0 24 24"
        >
          <path
            fill="#7b1df4"
            d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"
          />
        </svg>
      </div>
    </div>

    <div class="w-full h-[368px] flex justify-between items-center" ref="section3" style="animation-delay: 300ms" :class="{'showRight': section3Visible, 'showLeft': !section3Visible}">
      <div class="flex items-center justify-center w-1/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="330"
          height="330"
          viewBox="0 0 24 24"
        >
          <path
            fill="#7b1df4"
            d="M20 2H4v2l5.81 4.36a7.004 7.004 0 0 0-4.46 8.84a6.996 6.996 0 0 0 8.84 4.46a7 7 0 0 0 0-13.3L20 4zm-5.06 17.5L12 17.78L9.06 19.5l.78-3.33l-2.59-2.24l3.41-.29L12 10.5l1.34 3.14l3.41.29l-2.59 2.24z"
          />
        </svg>
      </div>
      <div
        class="w-3/4 py-10 text-[35px] px-[47px] font-mont rounded-l-3xl shadow-custom"
      >
        Наша гимназия гордится своими наградами и достижениями, которые стали
        возможными благодаря преданности выдающихся педагогов и таланту наших
        студентов. Наши ученики регулярно завоевывают призовые места, воплощая
        свой потенциал в научных и творческих сферах. предметов и дополнительных
        занятий позволяет разносторонне развиваться.
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import {useElementVisibility} from '@vueuse/core'
import {ref} from 'vue'
import Header from "../components/Header.vue";
import Footer from '../components/Footer.vue';

let section1 = ref(null);
let section2 = ref(null);
let section3 = ref(null);

const section1Visible = useElementVisibility(section1);
const section2Visible = useElementVisibility(section2);
const section3Visible = useElementVisibility(section3);

</script>

<style>
.font-mont {
  font-family: "Montserrat Alternates";
  font-weight: 300;
}

.shadow-custom {
  box-shadow: 0px 4px 42px -6px #7b1cf4;
}
</style>
