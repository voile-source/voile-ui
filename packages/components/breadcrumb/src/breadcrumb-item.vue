<template>
  <span :class="bem.e('item')">
    <span :class="[bem.e('inner'), bem.is('link',!!props.to)]" @click="onClick"><slot/></span>
    <span :class="bem.e('separator')">{{ separator }}</span>
  </span>
</template>

<script setup lang="ts">
import { inject, toRefs, getCurrentInstance } from 'vue';
import { useNamespace } from '@voile-ui/hooks';
import { breadcrumbKey } from '@voile-ui/tokens';
import { breadcrumbItemProps } from './breadcrumb-item';
import { Router } from 'vue-router';

defineOptions({
  name: "VBreadcrumbItem"
})

const props = defineProps(breadcrumbItemProps);

const bem = useNamespace('breadcrumb');
const breadcrumbContext = inject(breadcrumbKey, undefined)!;
const instance = getCurrentInstance();

const { separator } = toRefs(breadcrumbContext);

const router = instance!.appContext.config.globalProperties.$router as Router;
const onClick = ():void => {
  if(props.to === undefined || props.to === '') return;
  props.replace ? router.replace(props.to) : router.push(props.to);
}

</script>