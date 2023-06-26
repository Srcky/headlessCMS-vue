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
const popularProductsItems: Ref<PopularProductItem[]> = ref([]);

onBeforeMount(async () => {
    try {
        const popularProducts = await apiService.getProductItems(props.categoryName, props.imageGroup);
        if (popularProducts.data) {
            popularProductsItems.value = [...popularProducts.data.attributes[props.imageGroup]];
        }
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <ul v-if="popularProductsItems.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-14 my-16">
        <PopularItem v-for="item in popularProductsItems" :image="item.image" :title="item.title"
            :description="item.description" :price="item.price" />
    </ul>
</template>