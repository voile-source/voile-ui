<template>
  <v-breadcrumb>
    <v-breadcrumb-item
      v-for="(item, index) in dataList"
      :key="item.label + index"
      :to="item.link"
      >{{ item.label }}</v-breadcrumb-item
    >
  </v-breadcrumb>
</template>

<script setup lang="ts">
const dataList = [
  { label: "首页", link: "/home" },
  { label: "商品列表", link: "/list" },
  { label: "商品详情", link: "/desc" },
];
</script>
