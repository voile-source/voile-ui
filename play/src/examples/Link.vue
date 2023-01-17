<template>
  <div style="display: flex; gap: 20px">
    <v-link
      v-for="item in types"
      :key="item"
      :type="item"
      href="http://www.baidu.com"
      target="_blank"
      >{{ item }}</v-link
    >
  </div>
  <div style="display: flex; gap: 20px">
    <v-link v-for="item in types" :key="item" :type="item" href="#" underline>{{
      item
    }}</v-link>
  </div>
  <div style="display: flex; gap: 20px">
    <v-link v-for="item in types" :key="item" :type="item" href="#" disabled>{{
      item
    }}</v-link>
  </div>
</template>

<script setup lang="ts">
const types = ["default", "primary", "success", "danger", "warning", "info"];
</script>
