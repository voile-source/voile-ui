import type { ExtractPropTypes } from 'vue';
import type Button from './button.vue';
import { stateType, booleanType } from '@voile-ui/hooks';

export const buttonProps = {
  size: {
    type: String,
    values: ['small', 'default', 'large'],
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  type: stateType,
  bg: booleanType,
  link: booleanType,
  text: booleanType,
  plain: booleanType,
  loading: booleanType,
  round: booleanType,
  circle: booleanType,
  disabled: booleanType,
  autofocus: booleanType,
} as const;

export type Props = ExtractPropTypes<typeof buttonProps>;
export type ButtonInstance = InstanceType<typeof Button>;
