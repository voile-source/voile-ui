import Icon from './icon';
import Divider from './divider';
import Breadcrumb from './breadcrumb';
import Button from './button';

const components = [Icon, Button, Divider, Breadcrumb];
const INSTALLED_KEY = Symbol('INSTALLED_KEY');

export default {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return;
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true;
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c));
  },
};
