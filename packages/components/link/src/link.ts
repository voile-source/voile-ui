import { ExtractPropTypes } from 'vue';
import type Link from './link.vue';
import { stateType, booleanType } from '@voile-ui/hooks';

export const linkProps = {
  type: stateType,
  underline: booleanType,
  disabled: booleanType,
};

export type Props = ExtractPropTypes<typeof linkProps>;
export type LinkInstance = InstanceType<typeof Link>;
