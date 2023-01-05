<script setup lang="ts">
import FeatureItem from '@/components/FeatureItem.vue';
import alarm from '@/assets/images/alarm-console.svg';
import video from '@/assets/images/cctv.svg';
import kasa from '@/assets/images/cash-register.svg';
import comp from '@/assets/images/computer.svg';
import ac from '@/assets/images/ac.svg';

const featureItems = [
    {
        image: alarm,
        heading: 'Alarmi i centrale',
        text: 'U današnje vreme za sigurnost vašeg objekta više nisu dovoljni ključ i brava. Alarmni sistemi znatno umanjuju šansu za provalu, a ponekad je i potpuno sprečavaju.'
    },
    {
        image: video,
        heading: 'Video nadzor',
        text: 'Jedan od najzastupljenijih vidova tehnicke zastite danas je i sistem video nadzora. Svedoci smo velike ekspanzije takvog vida zastite koji ima siroka resenja i primenu.'
    },
    {
        image: kasa,
        heading: 'Fiskalne kase',
        text: 'U mogucnosti smo da Vam ponudimo veliki broj modela fiskalnih kasa od razlicitih proizvodjaca. Kod nas mozete dobiti kompletnu uslugu fiskalizacije i servisa.'
    },
    {
        image: comp,
        heading: 'Racunari i operma',
        text: 'Vršimo prodaju i servis racunara i racunarske opreme. Nudimo veliki izbor pojedinacnih komponenti kao i mogućnost sklapanja konfiguracije po želji.'
    },
    {
        image: ac,
        heading: 'Servis i ugradnja klima uredjaja',
        text: 'Create new plans with different features and intrigue your users to subscribe to any plan.'
    },
];
</script>
<template>
    <section>
        <div class="relative padded-container py-10 flex flex-col items-center text-center">
            <h2 class="text-4xl font-light">Prodaja i servis</h2>
            <p class="mt-4 leading-6 text-wave-200">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. <br> Excepteur sint occaecat cupidatat non proident!</p>
            <ul class="flex my-16 gap-x-8 gap-y-14 flex-wrap justify-center">
                <FeatureItem v-for="item in featureItems" :image="item.image" :heading="item.heading"
                    :text="item.text" />
            </ul>
        </div>
    </section>
</template>