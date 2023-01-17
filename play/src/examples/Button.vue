<template>
  <v-button v-for="item in types" size="small" :type="item">按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item">按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" size="large" :type="item">按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" plain>按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" round>按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" icon="!">按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" disabled>按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" plain disabled>按钮</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" link>link</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" text>link</v-button>
  <br /><br />
  <v-button v-for="item in types" :type="item" link disabled>link</v-button>
  <br /><br />
</template>

<script setup lang="ts">
const types = ["", "primary", "success", "danger", "warning", "info"];
</script>
