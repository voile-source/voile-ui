import Breadcrumb from './src/breadcrumb.vue';
import BreadcrumbItem from './src/breadcrumb-item.vue';
import { withInstall, withNoopInstall } from '@voile-ui/utils';

// 通过 withInstall 方法给 Icon 添加了一个 install 方法
export const VBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
});
export const VBreadcrumbItem = withNoopInstall(BreadcrumbItem);

export default VBreadcrumb;
// 导出 Icon 组件的 props

export * from './src/breadcrumb';
export * from './src/breadcrumb-item';
