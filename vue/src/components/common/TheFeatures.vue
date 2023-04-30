<script setup lang="ts">
import Feature from '@/components/FeatureItem.vue';
import { FeatureItem } from '@/types';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';


const apiUrl = import.meta.env.VITE_API_URL;
const featureItems: Ref<FeatureItem[]> = ref([]);

onMounted(() => {
    fetch(`${apiUrl}/api/feature-items?populate=image`).then(result => result.json()).then(res => {
        if (res.data) {
            console.log(res.data);
            res.data.forEach((element: any) => {
                featureItems.value.push(element.attributes);
            });
        }
    });
})


</script>
<template>
    <section>
        <div class="relative padded-container py-10 flex flex-col items-center text-center">
            <h2 class="text-4xl font-light">Prodaja i servis</h2>
            <p class="mt-4 leading-6 text-wave-200">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. <br> Excepteur sint occaecat cupidatat non proident!</p>
            <ul class="flex my-16 gap-x-8 gap-y-14 flex-wrap justify-center">
                <Feature v-for="item in featureItems" :image="item.image" :heading="item.heading"
                    :description="item.description" />
            </ul>
        </div>
    </section>
</template>