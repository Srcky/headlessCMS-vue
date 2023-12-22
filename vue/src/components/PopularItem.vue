<script setup lang="ts">
import Markdown from 'vue3-markdown-it';

const baseUrl = import.meta.env.VITE_BASE_URL;

defineProps<{
    image?: any,
    title?: string,
    description?: string;
    button?: string,
    price?: string;
}>();
</script>

<template>
    <li class="grid content-between rounded-xl bg-white p-6 shadow-lg duration-300 border border-gray-200">
        <div class="content-wrapper">
            <div v-if="image" class="pb-6 border-b border-gray-200">
                <img :src="image.data.attributes.url" :alt="title">
            </div>
            <h3 v-if="title" class="mt-6 mb-2 text-lg leading-6">{{ title }}</h3>
            <Markdown v-if="description" class="parsed-content mt-2 text-sm leading-5" :source="description" />
        </div>
        <div v-if="price" class="bg-blue-500 text-white p-2 mt-4 text-center"><strong>Cena: {{ price }} din.</strong></div>
    </li>
</template>