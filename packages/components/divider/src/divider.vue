<template>
  <div :class="[bem.b(),bem.m(props.direction)]" :style="style">
    <span v-if="$slots.default && props.direction !== 'vertical'" :class="[bem.e('text'), bem.is(props.contentPosition)]"><slot/></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '@voile-ui/hooks'
import { dividerProps } from './divider'
import { isUndefined } from '@voile-ui/utils'
import type {CSSProperties} from 'vue'

defineOptions({
  name: "VDivider"
})

const props = defineProps(dividerProps);
const bem = useNamespace('divider');

const style = computed<CSSProperties>(() => {
  return {
    "--border-style": isUndefined(props.borderStyle) ? 'solid' : props.borderStyle,
  }
})
</script>
