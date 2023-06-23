<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { apiService } from '@/api/apiServices';

const submitted = ref(false);
const success = ref(false);
const loading = ref(false);
const antiSpam = ref([]);
const answer = ref();
const questionRandomizer = ref();

const subject = ref();
const email = ref();
const message = ref();


const handleSubmit = async () => {
    if (Number(answer.value.value) === questionRandomizer.value.a) {
        loading.value = true;
        try {
            await apiService.sendMessage(subject.value, email.value, message.value);
            submitted.value = true;
            success.value = true;
        } catch (error) {
            success.value = false;
            console.log(error);
        } finally {
            loading.value = false;
        }
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
    <h3 class="mb-6 font-semibold">Pišite nam</h3>
    <div v-if="submitted && success && !loading" class="text-white">
        <h2 class="text-2xl">Hvala Vam!</h2>
        <div class="text-md">Vaša poruka je poslata.</div>
    </div>
    <div class="text-md" v-else-if="submitted && !loading && !success">
        Došlo je do greške. Molimo proverite da li su sva polja pravilno popunjena i pokušajte ponovo.
    </div>
    <div class="text-md" v-else-if="loading">
        Slanje poruke...
    </div>
    <form v-else @submit.prevent="handleSubmit">
        <div class="mb-3 pt-0">
            <input v-model="subject" type="text" placeholder="Tema" name="subject"
                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required />
        </div>
        <div class="mb-3 pt-0">
            <input v-model="email" type="email" placeholder="Email" name="email"
                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required />
        </div>
        <div class="mb-3 pt-0">
            <textarea v-model="message" placeholder="Vaša poruka" name="message" rows="4"
                class="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required></textarea>
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
</template>