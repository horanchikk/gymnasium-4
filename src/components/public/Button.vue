<template>
    <button class="h-fit flex items-center justify-center hover:scale-110 duration-200 transition-all" :class="{
        'bg-[#7B1CF4] text-white': selected,
        'bg-white text-[#7B1CF4]': !selected,
        'shadow-purple': shadow === 'purple',
        'shadow-dark': shadow === 'dark',
        'rounded-[50px]': rounded,
        'rounded-[22px]': !rounded,
    }">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    selected: boolean;
    rounded: boolean;
    shadow: "dark" | "purple" | false;
}>()
</script>

<style scoped>
button {
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 400;
}

.shadow-purple {
    box-shadow: 0px 4px 45px -13px #7B1CF4;
}

.shadow-dark {
    box-shadow: 0px 4px 33px 2px #1E1E1E;
}
</style>