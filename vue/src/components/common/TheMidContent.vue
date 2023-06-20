<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { IntroHeading } from '@/types';
import { apiService } from '@/api/apiServices';

const props = defineProps<{
    id: number;
}>();
const baseUrl = import.meta.env.VITE_BASE_URL;
const midContent: Ref<IntroHeading | undefined> = ref();

onBeforeMount(async () => {
    try {
        const midContentRes = await apiService.getMidContent(props.id);
        midContent.value = midContentRes.data.attributes.pageMidContent;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <div class="bg-gray-200">
        <div class="relative padded-container py-10">
            <div class="grid md:grid-cols-2 gap-14 items-center">
                <div>
                    <h2 v-if="midContent?.heading" class="text-4xl font-light mb-16">{{ midContent.heading }}</h2>
                    <p v-if="midContent?.longDescription" class="leading-6 text-left max-w-2xl">{{
                        midContent.longDescription
                    }}
                    </p>
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
    </div>
</template>
