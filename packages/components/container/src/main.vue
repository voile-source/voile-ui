<template>
  <div :class="ns.b()">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@voile-ui/hooks";

defineOptions({
  name: "VMain",
});

const ns = useNamespace("main");
</script>
