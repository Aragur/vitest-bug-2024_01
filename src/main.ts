import App from '@/App.vue';
import { createApp } from 'vue';

async function setupApp() {
  return createApp(App).mount('#app');
}
setupApp();