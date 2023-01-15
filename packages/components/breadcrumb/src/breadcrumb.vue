<template>
  <div ref="breadcrumb" :class="bem.b()">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { useNamespace } from '@voile-ui/hooks';
import { breadcrumbProps } from './breadcrumb'
import { breadcrumbKey } from '@voile-ui/tokens';

defineOptions({
  name: "VBreadcrumb"
})

const bem = useNamespace('breadcrumb');
const props = defineProps(breadcrumbProps);

provide(breadcrumbKey, props);

</script>

