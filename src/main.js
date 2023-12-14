import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub and LinkedIn icons

// Add the Font Awesome solid icons and specific brand icons to the library
library.add(fas, faGithub, faLinkedin);

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon) // Register the Font Awesome component
  .mount('#app');
