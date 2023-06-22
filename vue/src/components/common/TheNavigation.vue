<script setup lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { navigationItems } from '@/util/navigationItems';
import { onMounted, computed, ref } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router';

const showMobileMenu = ref(false);

const toggleNav = () => (showMobileMenu.value = !showMobileMenu.value);
const closeNav = () => (showMobileMenu.value = false);


</script>
<template>
    <nav class="hidden md:block" aria-label="Primary navigation">
        <ul class="flex flex-wrap justify-center gap-7">
            <li v-for="item in navigationItems" :key="item.title">
                <router-link
                    class="block relative text-white after:block after:absolute after:content-[''] after:bg-white after:w-0 after:h-[2px] after:transition-[width] after:ease-in-out after:delay-150 hover:after:w-full"
                    active-class="active" :aria-label="item.title" :to="item.to">
                    {{ item.title }}
                </router-link>
            </li>
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
<style lang="scss" scoped>
.active::after {
    @apply w-full;
}
</style>