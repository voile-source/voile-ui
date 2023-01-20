<template>
  <div :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@voile-ui/hooks";
import { Component, computed, useSlots, VNode } from "vue";

defineOptions({
  name: "VContainer",
});

const props = defineProps({
  direction: {
    type: String,
  },
});

const slots = useSlots();

const ns = useNamespace("container");

const isVertical = computed(() => {
  if (props.direction === "vertical") {
    return true;
  } else if (props.direction === "horizontal") {
    return false;
  }

  if (slots && slots.default) {
    const vNode: VNode[] = slots.default();
    return vNode.some((vNode) => {
      const tag = (vNode.type as Component).name;
      return tag === "VHeader" || tag === "VFooter";
    });
  }

  return false;
});
</script>
