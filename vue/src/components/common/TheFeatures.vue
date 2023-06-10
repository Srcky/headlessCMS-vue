<script setup lang="ts">
import Feature from '@/components/FeatureItem.vue';
import { FeatureItem, IntroHeading } from '@/types';
import { apiService } from '@/api/apiServices';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';

const featureItems: Ref<FeatureItem[]> = ref([]);
const introText: Ref<IntroHeading | undefined> = ref();

onMounted(async () => {
    try {
        const featuresRes = await apiService.getFeatures();
        if (featuresRes.data) {
            featuresRes.data.forEach((element: any) => {
                featureItems.value.push(element.attributes);
            });
        }
        const introTextRes = await apiService.getIntroText();
        introText.value = introTextRes.data.attributes.homePageIntro;
    } catch (error) {
        console.log(error);
    }
});


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