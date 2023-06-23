<script setup lang="ts">
import { navigationItems } from '@/util/navigationItems';
import ContactForm from '@/components/ContactForm.vue';

</script>
<template>
    <footer class="bg-white pt-40 bg-[url('@/assets/images/footer-background.svg')] bg-cover">
        <div class="padded-container">
            <div class="grid w-full sm:grid-cols-3 gap-14 sm:gap-10 pb-20 pt-16">
                <div class="text-white">
                    <router-link to="/" class="w-40">
                        <img src="@/assets/images/mb-electronic-logo.svg" alt="MB electronic logo"
                            class="w-full max-w-[10rem]" />
                    </router-link>
                    <dl class="mt-4 text-sm" aria-label="Address">
                        <dt><strong>Aranđelovac</strong></dt>
                        <dd>Kralja petra I bb</dd>
                        <dt>tel: +381 34 701 235</dt>
                    </dl>
                </div>
                <div class="text-white">
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
        </div>
    </footer>
</template>
