<script setup lang="ts">
import { navigationItems } from '@/util/navigationItems';
import { ref, Ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
    headerHeight: number | undefined;
}>();

const route = useRoute();
const navOpen: Ref = ref(false);

const toggleNav = () => {
    navOpen.value = !navOpen.value;
};

// Close navigation on click outside menu
const handleClickOutside = (evt: Event) => {
    if (!(evt.target as HTMLElement)?.dataset?.menu) {
        navOpen.value = false;
    }
};

// Ensuring no scroling is possible when mobile menu is opened
watch(navOpen, (newNavOpen) => {
    const bodyElement = document.body;
    if (newNavOpen) {
        bodyElement.classList.add('overflow-hidden');
        document.addEventListener('touchend', handleClickOutside);
    } else {
        bodyElement.classList.remove('overflow-hidden');
        document.removeEventListener('touchend', handleClickOutside);
    }
});

// Closing navigation after route changes
watch(route, (newPage) => {
    if (newPage.path) {
        navOpen.value = false;
    }
});

</script>
<template>
    <span class="material-icons-outlined absolute left-4 text-white top-1/2 z-40 -translate-y-1/2 md:hidden"
        @touchend="toggleNav" data-menu="true">
        {{ navOpen ? 'close' : 'menu' }}
    </span>
    <nav class="fixed h-screen w-[90vw] top-0 pt-20 pl-4 left-0 -translate-x-full transition-transform duration-300 ease-in bg-blue-600 md:pt-0 md:pl-0 md:relative md:h-auto md:w-auto md:bg-inherit md:translate-x-0"
        :class="{ 'translate-x-0': navOpen }" aria-label="Primary navigation" data-menu="true">
        <ul class="flex flex-wrap justify-center gap-7 flex-col md:flex-row">
            <li v-for="item in navigationItems" :key="item.title" class="flex">
                <router-link
                    class="flex relative text-white after:block after:absolute after:bottom-0 after:content-[''] after:bg-white after:w-0 after:h-[2px] md:after:transition-[width] md:after:ease-in-out md:after:delay-150 md:hover:after:w-full"
                    active-class="active" :aria-label="item.title" :to="item.to">
                    <span class="material-icons-outlined text-white mr-4 md:hidden">{{ item.iconClass }}</span>
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
.active::after {
    @apply w-full;
}
</style>