import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import App from './App.vue';
import router from './router';
import './index.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.component('Carousel', Carousel);
// app.component('Navigation', Navigation);
// app.component('Pagination', Pagination);
// app.component('Slide', Slide);

app.mount('#app');
