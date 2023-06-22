<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import type { Ref } from 'vue';
import { PopularProductItem } from '@/types';
import { apiService } from '@/api/apiServices';
import PopularItem from '@/components/PopularItem.vue';

const props = defineProps<{
    categoryName: string,
    imageGroup: string,
}>();
const popularCctvItems: Ref<PopularProductItem[]> = ref([]);

onBeforeMount(async () => {
    try {
        const popularCctv = await apiService.getProductItems(props.categoryName, props.imageGroup);
        if (popularCctv.data) {
            popularCctvItems.value = [...popularCctv.data.attributes.cctvEquipment];
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