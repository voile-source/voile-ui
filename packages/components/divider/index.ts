import { withInstall } from '@voile-ui/utils';
import Divider from './src/divider.vue';
// 通过 withInstall 方法给 Icon 添加了一个 install 方法
const VDivider = withInstall(Divider);
export default VDivider;
// 导出 Icon 组件的 props
export * from './src/divider';
