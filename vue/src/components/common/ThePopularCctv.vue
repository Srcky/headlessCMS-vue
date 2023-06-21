<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import type { Ref } from 'vue';
import { PopularProductItem } from '@/types';
import { apiService } from '@/api/apiServices';
import PopularItem from '@/components/PopularItem.vue';

const popularCctvItems: Ref<PopularProductItem[]> = ref([]);

onBeforeMount(async () => {
    try {
        const popularCctv = await apiService.getCctvItems();
        if (popularCctv.data) {
            popularCctvItems.value = [...popularCctv.data.attributes.cctvItems];
        }
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <ul v-if="popularCctvItems.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-14 my-16">
        <PopularItem v-for="item in popularCctvItems" :image="item.image" :title="item.title"
            :description="item.description" :button="item.button" />
    </ul>
</template>