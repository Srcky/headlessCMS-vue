<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';

const headerHeightValue: Ref<Record<string, Number>> | undefined = inject('headerHeightValue');
console.log(headerHeightValue?.value)

</script>
<template>
    <section :style="`--header-height: ${headerHeightValue}px`"
        class="relative h-[100vh] w-full before:block before:absolute before:content-[''] before:bg-black before:opacity-70 before:-z-10">
        <video loop muted autoplay class="absolute -z-20 object-cover w-full h-[100vh]">
            <source src="@/assets/videos/video.webm" type="video/webm">
            <source src="@/assets/videos/video.mp4" type="video/mp4">
            I'm sorry, your browser doesn't support HTML video.
        </video>
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
}
</style>