import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faComment as faCommentSolid,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCommentSolid, faComments);

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
