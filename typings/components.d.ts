import type Icon from '@voile-ui/components/icon';
import type Divider from '@voile-ui/components/divider';
// For this project development
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VIcon: typeof Icon;
    VDivider: typeof Divider;
  }
}

export {};
