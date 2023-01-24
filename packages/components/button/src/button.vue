<template>
  <button :class="classList">
    <i v-if="props.icon !== ''"><Icon>!</Icon></i>
    <span v-else><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from "@voile-ui/hooks";
import { buttonProps } from "./button";
import Icon from "@voile-ui/components/icon";

defineOptions({
  name: "VButton",
});

const props = defineProps(buttonProps);

const nc = useNamespace("button");

const classList = [
  nc.b(),
  props.type === "" ? "" : nc.m(props.type),
  props.size === "" || props.size === "default" ? "" : nc.m(props.size),
  nc.is("bg", props.bg),
  nc.is("plain", props.plain),
  nc.is("text", props.text),
  nc.is("link", props.link),
  nc.is("round", props.round),
  nc.is("circle", props.circle || props.icon !== ""),
  nc.is("loading", props.loading),
  nc.is("disabled", props.disabled),
];
</script>
