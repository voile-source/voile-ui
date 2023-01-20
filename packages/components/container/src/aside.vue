<template>
  <div :class="ns.b()" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@voile-ui/hooks";
import { computed, CSSProperties } from "vue";

defineOptions({
  name: "VAside",
});

const props = defineProps({
  width: String,
});

const ns = useNamespace("aside");

const style = computed(() => {
  return props.width
    ? (ns.cssVarBlock({
        width: props.width,
      }) as CSSProperties)
    : {};
});
</script>
