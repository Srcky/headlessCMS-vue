<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import Navigation from './TheNavigation.vue';

const emit = defineEmits(['headerHeightChange']);

const header = ref<HTMLElement | null>(null);
let debounceHeight = ref<Number | undefined>();
let heightTimeout = ref<any>();
const transparentBackground = ref<boolean>(true);

onMounted(() => {
    emit('headerHeightChange', header.value?.clientHeight);
});

window.addEventListener('resize', () => {
    if (debounceHeight.value === header.value?.clientHeight) return;
    if (heightTimeout.value) clearTimeout(heightTimeout.value);
    heightTimeout.value = setTimeout(() => {
        emit('headerHeightChange', header.value?.clientHeight);
    }, 250);
});

window.addEventListener('scroll', () => {
    if (header.value && header.value?.offsetTop > 120) {
        transparentBackground.value = false;
    } else {
        transparentBackground.value = true;
    }
});

// 2nd way of passing props to a parent
// const props = defineProps({
//     headerHeightValue: {
//         type: Function
//     }
// });
// window.addEventListener('resize', () => {
//     if (props.headerHeightValue) {
//         props.headerHeightValue(header.value?.clientHeight);
//     }
// })

</script>
<template>
    <header class="sticky top-0 z-50 transition-[background-color] ease-in-out duration-300"
        :class="{ 'bg-blue-500/90': !transparentBackground }" ref="header">
        <div class="header-nav padded-container py-5 flex flex-wrap justify-center lg:justify-between gap-5">
            <RouterLink to="/" class="w-40" aria-label="MB electronic homepage">
                <img src="@/assets/images/mb-electronic-logo.svg" alt="MB electronic logo"
                    class="w-full h-[26px] max-w-[10rem]" />
            </RouterLink>
            <Navigation :headerHeight="header?.clientHeight"></Navigation>
        </div>
    </header>
</template>
