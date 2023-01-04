<script setup lang="ts">

defineProps<{
  heading: string,
  text: string;
  buttonText: string,
  image: string,
  imageAlt: string;
}>();
</script>

<template>
  <div class="padded-container flex gap-x-8 flex-wrap justify-center pt-8 md:pt-0">
    <div class="flex flex-col justify-center md:items-end basis-full md:basis-[calc(50%-1rem)] text-left md:text-right">
      <h2 class="text-4xl font-light">{{ heading }}</h2>
      <p class="my-8">{{ text }}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-[10rem]">{{ buttonText }}</button>
    </div>
    <div class="flex justify-center basis-full md:basis-[calc(50%-1rem)] items-center">
      <img :src="image" :alt="imageAlt" class="max-w-[300px]">
    </div>
  </div>
</template>