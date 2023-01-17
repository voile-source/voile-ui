<template>
  <a :class="classList">
    <span :class="nc.e('inner')"><slot /></span>
  </a>
</template>

<script setup lang="ts">
import { useNamespace } from "@voile-ui/hooks";
import { linkProps } from "./link";

defineOptions({
  name: "VLink",
});

const props = defineProps(linkProps);

const nc = useNamespace("link");

const classList = [
  nc.b(),
  props.type === "" ? "" : nc.e(props.type),
  nc.is("underline", props.underline),
  nc.is("disabled", props.disabled),
];
</script>
