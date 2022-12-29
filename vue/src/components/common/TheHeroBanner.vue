<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';

const headerHeightValue: Ref<Record<string, Number>> | undefined = inject('headerHeightValue');

</script>
<template>
    <section
        class="relative h-[100vh] w-full before:block before:absolute before:inset-0 before:content-[''] before:-top-[4.125rem] before:bg-black before:opacity-70 before:-z-10">
        <h1 class="text-white">{{ headerHeightValue }}</h1>
        <video loop muted autoplay class="absolute -z-20 object-cover w-full -top-[4.125rem] h-[calc(100vh+4.125rem)]">
            <source src="@/assets/videos/video.webm" type="video/webm">
            <source src="@/assets/videos/video.mp4" type="video/mp4">
            I'm sorry, your browser doesn't support HTML video.
        </video>
    </section>
</template>