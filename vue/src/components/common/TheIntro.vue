<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { IntroHeading } from '@/types';
import { apiService } from '@/api/apiServices';

const props = defineProps<{
    id: number;
}>();
const introText: Ref<IntroHeading | undefined> = ref();

onBeforeMount(async () => {
    try {
        const introTextRes = await apiService.getIntroText(props.id);
        introText.value = introTextRes.data.attributes.pageIntro;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <h2 v-if="introText?.heading" class="text-4xl font-light">{{ introText.heading }}</h2>
    <p v-if="introText?.description" class="mt-4 leading-6 text-wave-200 max-w-2xl">{{ introText.description }}</p>
</template>
