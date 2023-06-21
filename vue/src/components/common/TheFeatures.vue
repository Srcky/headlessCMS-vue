<script setup lang="ts">
import Feature from '@/components/FeatureItem.vue';
import { FeatureItem } from '@/types';
import { apiService } from '@/api/apiServices';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import TheIntro from './TheIntro.vue';

const props = defineProps<{
    id: number;
}>();

const featureItems: Ref<FeatureItem[]> = ref([]);

onMounted(async () => {
    try {
        const featuresRes = await apiService.getFeatures();
        if (featuresRes.data) {
            featuresRes.data.forEach((element: any) => {
                featureItems.value.push(element.attributes);
            });
        }
    } catch (error) {
        console.log(error);
    }
});


</script>
<template>
    <section>
        <div class="relative padded-container py-10 flex flex-col items-center text-center">
            <TheIntro :id="props.id" />
            <ul class="flex my-16 gap-x-8 gap-y-14 flex-wrap justify-center">
                <Feature v-for="item in featureItems" :image="item.image" :heading="item.heading"
                    :description="item.description" />
            </ul>
        </div>
    </section>
</template>