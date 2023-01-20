<template>
  <div :class="ns.b()" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@voile-ui/hooks";
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "VHeader",
});

const props = defineProps({
  height: String,
});

const ns = useNamespace("header");

const style = computed(() => {
  return props.height
    ? (ns.cssVarBlock({
        height: props.height,
      }) as CSSProperties)
    : {};
});
</script>
