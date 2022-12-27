<script setup lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const showMobileMenu = ref(false);
const toggleNav = () => (showMobileMenu.value = !showMobileMenu.value);
const closeNav = () => (showMobileMenu.value = false);
const navigationItems = [
    {
        title: 'Alarmi',
        iconClass: 'comment',
        to: { name: 'alarmi' },
    },
    {
        title: 'Video Nadzor',
        iconClass: 'comments',
        to: { name: 'videoNadzor' },
    },
    {
        title: 'Fiskalne kase',
        iconClass: 'chart-bar',
        to: { name: 'fiskalneKase' },
    },
    {
        title: 'Racunari i oprema',
        iconClass: 'comments',
        to: { name: 'racunariOprema' },
    },
    {
        title: 'O nama',
        iconClass: 'comments',
        to: { name: 'oNama' },
    },
    {
        title: 'Kontakt',
        iconClass: 'comments',
        to: { name: 'kontakt' },
    },
];

</script>
<template>
    <nav class="hidden md:block" aria-label="Primary navigation">
        <ul class="flex flex-wrap gap-x-8 justify-center">
            <template v-for="item in navigationItems" :key="item.title">
                <li>
                    <router-link active-class="active" :aria-label="item.title" :to="item.to">
                        <!-- <fa-icon :icon="item.iconClass" class="text-2xl align-middle text-msg-red-500" /> -->
                        {{ item.title }}
                    </router-link>
                </li>
            </template>
        </ul>
    </nav>
    <!-- <nav aria-label="Mobile navigation">
        <div
            class="fixed md:hidden bottom-[1rem] right-[2rem] z-40 highlight-color-none drop-shadow-[3px_3px_5px_#00000082]">
            <button v-click-outside="closeNav" class="rounded-full w-16 h-16 bg-msg-red-500 z-50 relative"
                @click="toggleNav">
                <img src="@/assets/mb-electronic-logo.svg" alt="logo" :class="{ '-rotate-[25deg]': showMobileMenu }"
                    class="w-12 brightness-0 invert p-3 ml-2 z-50 transition duration-500" />
            </button>
            <transition name="slide-fade">
                <ul v-if="showMobileMenu"
                    class="transform absolute bg-msg-red-500 text-left py-3 px-6 bottom-[2.6rem] rounded-xl transition right-[2.6rem] rounded-br-none">
                    <template v-for="item in navigationItems" :key="item.title">
                        <li class="font-semibold py-2">
                            <router-link :to="item.to" class="text-white" :aria-label="item.title">{{ item.title }}
                            </router-link>
                        </li>
                    </template>
                </ul>
            </transition>
        </div>
    </nav> -->
</template>