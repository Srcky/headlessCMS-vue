<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { apiService } from '@/api/apiServices';
import { navigationItems } from '@/util/navigationItems';


const submitted = ref(false);
const FORM_ENDPOINT = '';
const antiSpam = ref([]);
const answer = ref();
const questionRandomizer = ref();

const handleSubmit = () => {
    if (Number(answer.value.value) === questionRandomizer.value.a) {
        console.log('Tacno');
        // submitted.value = true;
    } else {
        console.log(questionRandomizer.value.a);
    }
};

onMounted(async () => {
    const antiSpamRes = await apiService.getAntiSpam();
    const questions = antiSpamRes.data.attributes.antiSpam.questions;
    questions.forEach((element: never) => {
        antiSpam.value.push(element);
    });
    questionRandomizer.value = antiSpam.value[Math.floor(Math.random() * questions.length)];
});

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
                    <h3 class="mb-6 font-semibold">Pišite nam</h3>
                    <div v-if="submitted" class="text-white">
                        <h2 class="text-2xl">Hvala Vam!</h2>
                        <div class="text-md">Kontaktiraćemo Vas uskoro.</div>
                    </div>
                    <form v-else :action="FORM_ENDPOINT" @submit.prevent="handleSubmit" method="POST" target="_blank">
                        <div class="mb-3 pt-0">
                            <input type="text" placeholder="Vaše ime" name="name"
                                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required />
                        </div>

                        <div class="mb-3 pt-0">
                            <input type="email" placeholder="Email" name="email"
                                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required />
                        </div>

                        <div class="mb-3 pt-0">
                            <textarea placeholder="Vaša poruka" name="message" rows="4"
                                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                required />
                        </div>
                        <div class="question text-white mb-4">
                            <label for="securityQuestion">
                                Anti-bot zaštita: {{ questionRandomizer?.q }} (upisati broj)
                                <input type="number" name="securityQuestion" ref="answer"
                                    class="mt-2 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full">
                            </label>
                        </div>
                        <div class="mb-3 pt-0 text-right">
                            <button class="outline outline-1 outline-white text-white p-2 rounded w-[10rem]" type="submit">
                                Pošalji
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>
