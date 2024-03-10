import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'; // Import vue-lazyload

// Import Font Awesome and specific icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

// Add Font Awesome icons to the library
library.add(fas, faGithub, faLinkedin, faSquareInstagram);

// Create app instance
const app = createApp(App);

// Use vue-lazyload with options
app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'path-to-error-image.png',
  loading: 'path-to-loading-image.gif',
  attempt: 3
});

// Use store and router
app.use(store).use(router);

// Register Font Awesome component
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.mount('#app');
