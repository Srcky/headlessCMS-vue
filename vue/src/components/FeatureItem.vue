<script setup lang="ts">
const baseUrl = import.meta.env.VITE_BASE_URL;

defineProps<{
  image?: any,
  heading: string,
  description: string;
}>();
</script>

<template>
  <li
    class="flex flex-col basis-full sm:basis-[calc(50%-1rem)] md:basis-[calc(33.3333%-1.34rem)] items-center text-center">
    <img :src="baseUrl + image.data.attributes.url" :alt="heading" class="max-w-[6.2rem] p-1 border rounded-full">
    <h3 class="mt-6 text-lg leading-6">{{ heading }}</h3>
    <p class="mt-2 text-sm leading-5">{{ description }}</p>
  </li>
</template>
