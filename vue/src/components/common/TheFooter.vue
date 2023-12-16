<script setup lang="ts">
import { Ref, onBeforeMount, ref } from 'vue';
import { navigationItems } from '@/util/navigationItems';
import ContactForm from '@/components/ContactForm.vue';
import { apiService } from '@/api/apiServices';
import Markdown from 'vue3-markdown-it';


const shopInfo: Ref<any> = ref();
const currentYear = new Date().getFullYear();

onBeforeMount(async () => {
    try {
        const shopInfoRes: any = await apiService.getShopInfo();
        shopInfo.value = shopInfoRes.data.attributes.shopInfo;
    } catch (error) {
        console.log(error);
    }
})

</script>
<template>
    <footer class="bg-white pt-40 bg-[url('@/assets/images/footer-background.svg')] bg-cover">
        <div class="padded-container">
            <div class="grid w-full sm:grid-cols-3 gap-14 sm:gap-10 pb-16 pt-16">
                <div class="text-white">
                    <router-link to="/" class="w-40">
                        <img src="@/assets/images/mb-electronic-logo.svg" alt="MB electronic logo"
                            class="w-full h-[26px] max-w-[10rem]" />
                    </router-link>
                    <Markdown v-if="shopInfo" class="parsed-content mt-4 text-sm" aria-label="Address" :source="shopInfo" />

                </div>
                <div class="text-white hidden sm:block">
                    <h3 class="font-semibold">Glavni linkovi</h3>
                    <ul class="mt-6 space-y-4 text-sm" aria-label="Footer navigation">
                        <li v-for="item in navigationItems" :key="item.title">
                            <router-link class="relative inline-block group" active-class="active" :aria-label="item.title"
                                :to="item.to">
                                <span
                                    class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="text-white">
                    <ContactForm />
                </div>
            </div>
            <div class="text-sm text-white text-center mb-6">&copy; {{ currentYear }} MB electronic. Sva prava su
                zadržana. By
                <strong>Damiao</strong>.
            </div>
        </div>
    </footer>
</template>
