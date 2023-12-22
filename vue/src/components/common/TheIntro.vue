<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { IntroHeading } from '@/types';
import Markdown from 'vue3-markdown-it';
import { apiService } from '@/api/apiServices';

const props = defineProps<{
    id: string;
}>();
const baseUrl = import.meta.env.VITE_BASE_URL;
const introText: Ref<IntroHeading | undefined> = ref();

onBeforeMount(async () => {
    try {
        const introTextRes: any = await apiService.getIntroText(props.id);
        introText.value = introTextRes.attributes.pageIntro;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <h2 v-if="introText?.heading" class="text-4xl font-light">{{ introText.heading }}</h2>
    <p v-if="introText?.description" class="mt-8 leading-6 max-w-2xl">{{ introText.description }}</p>
    <Markdown v-if="introText?.longDescription" class="parsed-content mt-8 max-w-2xl" aria-label="Address"
        :source="introText?.longDescription" />
    <picture v-if="introText?.backgroundImage?.data">
        <source :srcset="introText?.backgroundImage.data?.attributes?.url">
        <source :srcset="introText?.backgroundImage.data?.attributes?.formats?.large?.url" media="(min-width: 48rem)">
        <source :srcset="introText?.backgroundImage.data?.attributes?.formats?.medium?.url" media="(min-width: 30rem)">
        <img :src="introText?.backgroundImage.data?.attributes?.formats?.small?.url" :alt="introText?.heading"
            :width="introText?.backgroundImage.data?.attributes?.formats?.small?.width"
            :height="introText?.backgroundImage.data?.attributes?.formats?.small?.height" loading="lazy" decoding="async">
    </picture>
</template>
