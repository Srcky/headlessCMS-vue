<script setup lang="ts">

defineProps<{
  image?: any,
  heading: string,
  description: string;
}>();
</script>

<template>
  <li
    class="flex flex-col basis-full sm:basis-[calc(50%-1rem)] md:basis-[calc(33.3333%-1.34rem)] items-center text-center">
    <img :src="'http://localhost:1337' + image.data.attributes.url" :alt="heading"
      class="max-w-[6.2rem] p-1 border rounded-full">
    <h3 class="mt-6 text-sm font-semibold leading-6">{{ heading }}</h3>
    <p class="mt-2 text-sm leading-5">{{ description }}</p>
  </li>
</template>
