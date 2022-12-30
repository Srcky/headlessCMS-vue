<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';

const headerHeightValue: Ref<Record<string, Number>> | undefined = inject('headerHeightValue');

</script>
<template>
    <section :style="`--header-height: ${headerHeightValue}px`"
        class="relative grid content-center h-[100vh] w-full before:block before:absolute before:content-[''] before:bg-black before:opacity-70 before:-z-10">
        <video loop muted autoplay class="absolute -z-20 object-cover w-full h-[100vh]">
            <source src="@/assets/videos/video.webm" type="video/webm">
            <source src="@/assets/videos/video.mp4" type="video/mp4">
            I'm sorry, your browser doesn't support HTML video.
        </video>
        <div class="hero-text padded-container text-white relative">
            <div class="max-w-[90%] md:max-w-[70%] px-8 xl:px-0">
                <h1 class="leading-tight font-light">Lorem ipsum dolor sit amet cupidatat</h1>
                <p class="text-l md:text-xl py-10 font-light"> Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 p-8 rounded">Saznaj
                    više</button>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    &::before {
        inset: 0px 0px var(--header-height) 0px;
        top: calc(0px - var(--header-height));
    }

    video {
        top: calc(0px - var(--header-height));
    }

    .hero-text {
        top: calc(0px - var(--header-height)/2);

        h1 {
            font-size: clamp(34px, 3.75rem, 5vw);
        }
    }
}
</style>