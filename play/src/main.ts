import { createApp } from 'vue';
import router from './router';
import Voile from '@voile-ui/components';
import '@voile-ui/theme-chalk/src/index.scss';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(Voile);
app.mount('#app');
