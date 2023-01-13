<template>
  <div class="content">
    <i :class="bem.b()" :style="style"><slot/></i> 
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { iconProps } from './icon';
import { useNamespace } from '@voile-ui/hooks'
import type { CSSProperties } from 'vue'
import {isUndefined, addUnit} from '@voile-ui/utils'

defineOptions({
	name: 'VIcon',
})

const bem = useNamespace('icon');

const props = defineProps(iconProps);
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color, // 通过 CSS 变量方式进行设置 color
  }
})

</script>

<style lang="scss" scoped>
</style>
