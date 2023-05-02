<script setup lang="ts">
import Feature from '@/components/FeatureItem.vue';
import { FeatureItem, IntroHeading } from '@/types';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';


const apiUrl = import.meta.env.VITE_API_URL;
const featureItems: Ref<FeatureItem[]> = ref([]);
const introText: Ref<IntroHeading | undefined> = ref();

onMounted(() => {
    fetch(`${apiUrl}/feature-items?populate=*`).then(result => result.json()).then(res => {
        if (res.data) {
            res.data.forEach((element: any) => {
                featureItems.value.push(element.attributes);
            });
        }
    });
    fetch(`${apiUrl}/home-page-intro?populate=*`).then(result => result.json()).then(res => {
        introText.value = res.data.attributes.homePageIntro;
    });
})


</script>
<template>
    <section>
        <div class="relative padded-container py-10 flex flex-col items-center text-center">
            <h2 class="text-4xl font-light">{{ introText?.heading }}</h2>
            <p class="mt-4 leading-6 text-wave-200 max-w-2xl">{{ introText?.description }}</p>
            <ul class="flex my-16 gap-x-8 gap-y-14 flex-wrap justify-center">
                <Feature v-for="item in featureItems" :image="item.image" :heading="item.heading"
                    :description="item.description" />
            </ul>
        </div>
    </section>
</template>