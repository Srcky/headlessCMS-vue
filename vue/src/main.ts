import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Markdown from 'vue3-markdown-it';

import './index.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Markdown);

app.mount('#app');
