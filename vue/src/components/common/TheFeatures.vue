<script setup lang="ts">
import FeatureItem from '@/components/FeatureItem.vue';
import { ref } from 'vue';

const featureItems = ref([
    {
        image: 'src/assets/images/alarm-console.svg',
        heading: 'Alarmi i centrale',
        text: 'Naše višegodišnje iskustvo u oblasti tehničkog obezbeđivanja objekata, kao i veliki broj zadovoljnih klijenata je naša najbolja preporuka i garancija Vaše sigurnosti!'
    },
    {
        image: 'src/assets/images/cctv.svg',
        heading: 'Video nadzor',
        text: 'Jedan od najzastupljenijih vidova tehnicke zastite danas je i sistem video nadzora. Svedoci smo velike ekspanzije takvog vida zastite koji ima siroka resenja i primenu'
    },
    {
        image: 'src/assets/images/cash-register.svg',
        heading: 'Fiskalne kase',
        text: 'U mogucnosti smo da Vam ponudimo veliki broj modela fiskalnih kasa od razlicitih proizvodjaca. Kod nas mozete dobiti kompletnu uslugu fiskalizacije i servisa.'
    },
    {
        image: 'src/assets/images/computer.svg',
        heading: 'Racunari i operma',
        text: 'Veliki izbor desktop i laptop računara za kućnu i poslovnu upotrebu. Mogućnost sklapanja konfiguracije po želji.'
    },
    {
        image: 'src/assets/images/ac.svg',
        heading: 'Servis i ugradnja klima uredjaja',
        text: 'Create new plans with different features and intrigue your users to subscribe to any plan.'
    },
]);
</script>
<template>
    <section class="padded-container py-10">
        <div class="relative z-20 flex flex-col items-center text-center">
            <h2 class="text-4xl font-medium">Prodaja i servis</h2>
            <p class="mt-4 leading-6 text-wave-200">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. <br> Excepteur sint occaecat cupidatat non proident!</p>
            <ul class="flex my-16 gap-x-8 gap-14 flex-wrap justify-center">
                <FeatureItem v-for="item in featureItems" :image="item.image" :heading="item.heading"
                    :text="item.text" />
            </ul>
        </div>
    </section>
</template>