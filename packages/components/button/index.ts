import { withInstall } from '@voile-ui/utils';
import Button from './src/button.vue';
// 通过 withInstall 方法给 Icon 添加了一个 install 方法
export const VButton = withInstall(Button);
export default VButton;
// 导出 Icon 组件的 props
export * from './src/button';
