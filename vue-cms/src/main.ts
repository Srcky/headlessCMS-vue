import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faAngleDown,
  faAngleLeft,
  faAward,
  faBell,
  faBusinessTime,
  faChartArea,
  faComment as faCommentSolid,
  faComments,
  faSearch,
  faSpinner,
  faUserCircle,
  faUserFriends,
  faAngleRight,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faTimes,
  faFilter,
  faChartBar,
  faPen,
  faTrash,
  faCheck,
  faCheckDouble,
  faEye,
  faEyeSlash,
  faMobile,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCommentSolid,
  faSpinner,
  faBell,
  faUserCircle,
  faUserFriends,
  faComments,
  faBusinessTime,
  faAward,
  faChartArea,
  faSearch,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faFilter,
  faChartBar,
  faPen,
  faTrash,
  faCheck,
  faCheckDouble,
  faEye,
  faEyeSlash,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faMobile,
  faMobileAlt
);

const app = createApp(App);
app.component('fa-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
