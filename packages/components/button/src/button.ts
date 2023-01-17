import type { ExtractPropTypes } from 'vue';
import type Button from './button.vue';

const booleanType = {
  type: Boolean,
  values: [true, false],
  default: false,
};

export const buttonProps = {
  size: {
    type: String,
    values: ['small', 'default', 'large'],
    default: '',
  },
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'danger', 'info'],
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
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
