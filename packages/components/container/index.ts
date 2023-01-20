import Aside from './src/aside.vue';
import Container from './src/container.vue';
import Main from './src/main.vue';
import Header from './src/header.vue';
import Footer from './src/footer.vue';
import { withInstall, withNoopInstall } from '@voile-ui/utils';

const VContainer = withInstall(Container, {
  Aside,
  Main,
  Header,
  Footer,
});
export default VContainer;
export const VAside = withNoopInstall(Aside);
export const VMain = withNoopInstall(Main);
export const VHeader = withNoopInstall(Header);
export const VFooter = withNoopInstall(Footer);

export type AsideInstance = InstanceType<typeof Aside>;
export type ContainerInstance = InstanceType<typeof Container>;
export type MainInstance = InstanceType<typeof Main>;
export type HeaderInstance = InstanceType<typeof Header>;
export type FooterInstance = InstanceType<typeof Footer>;

