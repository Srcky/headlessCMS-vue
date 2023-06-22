<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import Markdown from 'vue3-markdown-it';
import { IntroHeading } from '@/types';
import { apiService } from '@/api/apiServices';

const props = defineProps<{
    id: string;
}>();
const baseUrl = import.meta.env.VITE_BASE_URL;
const midContent: Ref<IntroHeading | undefined> = ref();

onBeforeMount(async () => {
    try {
        const midContentRes: any = await apiService.getMidContent(props.id);
        midContent.value = midContentRes.attributes.pageMidContent;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <article class="bg-gray-200">
        <div class="relative padded-container py-10">
            <div class="grid md:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 v-if="midContent?.heading" class="text-4xl text-center md:text-left font-light mb-12">{{
                        midContent.heading }}</h2>
                    <Markdown v-if="midContent?.longDescription" :source="midContent.longDescription"
                        class="parsed-content leading-6 text-left max-w-2xl" />
                </div>
                <picture v-if="midContent?.backgroundImage?.data">
                    <source :srcset="baseUrl + midContent?.backgroundImage.data?.attributes?.url">
                    <source :srcset="baseUrl + midContent?.backgroundImage.data?.attributes?.formats?.large?.url"
                        media="(min-width: 48rem)">
                    <source :srcset="baseUrl + midContent?.backgroundImage.data?.attributes?.formats?.medium?.url"
                        media="(min-width: 30rem)">
                    <img :src="baseUrl + midContent?.backgroundImage.data?.attributes?.formats?.small?.url"
                        :alt="midContent?.heading"
                        :width="midContent?.backgroundImage.data?.attributes?.formats?.small?.width"
                        :height="midContent?.backgroundImage.data?.attributes?.formats?.small?.height" loading="lazy"
                        decoding="async">
                </picture>
            </div>
        </div>
    </article>
</template>
<style lang="scss">
.parsed-content {
    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2.25rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.75rem;
    }

    h5 {
        font-size: 1.5rem;
    }

    h6 {
        font-size: 1.25rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-block-end: 1.5rem;
    }

    blockquote,
    figure,
    p,
    pre,
    li {
        margin-block-end: 0.5rem;
    }

    ul,
    ol {
        padding-inline-start: 1rem;
        list-style: disc;
    }

    ul {
        list-style: disc;
    }

    ol {
        list-style: decimal;
    }

    a {
        @apply text-blue-500;
    }
}
</style>
