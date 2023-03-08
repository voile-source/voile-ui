import Theme from 'vitepress/dist/client/theme-default/index.js';
import VoileUI from 'voile-ui';
import '@voile-ui/theme-chalk/src/index.scss';
import type { App } from 'vue';

console.log(VoileUI);

export default {
  ...Theme, // 默认主题
  enhanceApp({ app }: { app: App }) {
    app.use(VoileUI);
  },
};
