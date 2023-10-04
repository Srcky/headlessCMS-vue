<script setup lang="ts">
import HeroBanner from '@/components/common/TheHeroBanner.vue';
import TheIntro from '@/components/common/TheIntro.vue';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import { useRoute } from 'vue-router';
import maplibregl from 'maplibre-gl';

const route = useRoute();
const pageId = route.name as string;
const category = route.meta.category as string;
const imageGroup = route.meta.imageGroup as string;

const mapContainer = shallowRef<HTMLElement | string>('');
const map: any = shallowRef(null);

onMounted(() => {
  const apiKey = 'nbRh6dVhky9neOhm3WU7';

  const initialState = { lon: 20.565043492991194, lat: 44.3035952793808, zoom: 16 };

  map.value = markRaw(new maplibregl.Map({
    container: mapContainer.value,
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
    center: [initialState.lon, initialState.lat],
    zoom: initialState.zoom,
    pitch: 30,
    scrollZoom: false,
    doubleClickZoom: false
  }));

  map.value.addControl(new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
  }));

  new maplibregl.Marker({
    color: "#b30000",
    draggable: false
  }).setLngLat([20.565043492991194, 44.3035952793808]).setPopup(new maplibregl.Popup({ closeButton: false }).setHTML('<strong style="font-size: 14px;">MB electronic</strong><p>Kralja Petra I bb</p><p>+381 34 701 235</p><p>Pon - Pet od 08h do 17h</p>').setMaxWidth("300px")).addTo(map.value);

});

onUnmounted(() => {
  map.value?.remove();
});

</script>
<template>
  <HeroBanner :id="pageId" />
  <section class="relative padded-container py-10 flex flex-col items-center">
    <TheIntro :id="pageId" />
  </section>
  <div class="map-wrap w-full h-[60dvh]">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>


<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';

.map {
  margin: 0 auto;
  width: 90%;
  height: 100%;
}
</style>
