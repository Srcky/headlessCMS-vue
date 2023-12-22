<script setup lang="ts">
const baseUrl = import.meta.env.VITE_BASE_URL;

defineProps<{
  heading?: string,
  text?: string;
  buttonText?: string,
  buttonLink?: string,
  image: string,
  imageAlt: string;
}>();
</script>

<template>
  <div class="padded-container flex gap-x-8 flex-wrap justify-center">
    <div
      class="flex flex-col justify-center md:items-end basis-full md:basis-[calc(50%-1rem)] text-left md:text-right py-8">
      <h2 v-if="heading" class="text-4xl font-light">{{ heading }}</h2>
      <p v-if="text" class="my-8">{{ text }}</p>
      <router-link v-if="buttonLink" :to="buttonLink">
        <button ref="button" role="link" class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-[10rem]">{{
          buttonText
        }}</button>
      </router-link>
    </div>
    <div class="flex justify-center basis-full md:basis-[calc(50%-1rem)] items-center py-8">
      <img :src="image" :alt="imageAlt" class="max-w-[300px]" data-splide-lazy="image">
    </div>
  </div>
</template>