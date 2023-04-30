<script setup lang="ts">
import { ref } from 'vue';

const submitted = ref(false);
const FORM_ENDPOINT = '';
const securityQuestions = [
    {
        q: 'Koliko je 3 plus 3',
        a: 6
    },
    {
        q: 'Koliko je 2 puta 7',
        a: 14
    },
    {
        q: 'Koliko je 4 puta 3',
        a: 12
    },
    {
        q: 'Koliko je 12 manje 2',
        a: 10
    },
    {
        q: 'Koliko je 100 plus 1',
        a: 101
    },
    {
        q: 'Koliko je 100 plus 100',
        a: 200
    },
    {
        q: 'Koliko je 50 puta 2',
        a: 100
    },
];
const answer = ref();

const questionRandomizer = securityQuestions[Math.floor(Math.random() * 7)];

const handleSubmit = () => {
    if (Number(answer.value.value) === questionRandomizer.a) {
        console.log('Tacno');
        // submitted.value = true;
    } else {
        console.log(questionRandomizer.a);
    }
};

</script>
<template>
    <footer class="bg-white pt-40 bg-[url('@/assets/images/footer-background.svg')] bg-cover">
        <div class="padded-container">
            <div class="flex flex-wrap items-start justify-between pb-20 pt-4">
                <a href="#_" class="hidden md:flex items-center w-auto text-lg font-bold md:w-1/6">
                    <img src="@/assets/images/mb-electronic-logo.svg" alt="MB electronic logo" class="max-w-[10rem]" />
                </a>
                <div class="grid w-full pt-2 sm:grid-cols-2 gap-y-16 lg:gap-x-8 md:w-5/6 px-8">
                    <div class="text-white">
                        <h3 class="font-semibold">About</h3>
                        <ul class="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#_" class="relative inline-block group">
                                    <span
                                        class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                    <span>Our Story</span>
                                </a>
                            </li>
                            <li>
                                <a href="#_" class="relative inline-block group">
                                    <span
                                        class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                    <span>Company</span>
                                </a>
                            </li>
                            <li>
                                <a href="#_" class="relative inline-block group">
                                    <span
                                        class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                    <span>Our Team</span>
                                </a>
                            </li>
                            <li>
                                <a href="#_" class="relative inline-block group">
                                    <span
                                        class="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                                    <span>Work With Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="text-white">
                        <h3 class="mb-6 font-semibold">Pišite nam</h3>
                        <div v-if="submitted" class="text-white">
                            <h2 class="text-2xl">Hvala Vam!</h2>
                            <div class="text-md">Kontaktiraćemo Vas uskoro.</div>
                        </div>
                        <form v-else :action="FORM_ENDPOINT" @submit.prevent="handleSubmit" method="POST"
                            target="_blank">
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
                                    Anti-bot zaštita: {{ questionRandomizer.q }} (upisati broj)
                                    <input type="number" name="securityQuestion" ref="answer"
                                        class="mt-2 px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full">
                                </label>
                            </div>
                            <div class="mb-3 pt-0 text-right">
                                <button class="outline outline-1 outline-white text-white p-2 rounded w-[10rem]"
                                    type="submit">
                                    Pošalji
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
