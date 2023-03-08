<template>
  <div class="content">
    <v-container class="container">
      <v-header class="header" height="100px">Header</v-header>
      <v-main class="main">Main</v-main>
    </v-container>
    <v-container class="container">
      <v-aside class="aside">Aside</v-aside>
      <v-main class="main">Main</v-main>
    </v-container>
    <v-container class="container">
      <v-header class="header">Header</v-header>
      <v-container>
        <v-aside class="aside">Aside</v-aside>
        <v-main class="main">Main</v-main>
      </v-container>
    </v-container>
    <v-container class="container">
      <v-header class="header">Header</v-header>
      <v-container>
        <v-aside class="aside">Aside</v-aside>
        <v-container>
          <v-main class="main">Main</v-main>
          <v-footer class="footer">Footer</v-footer>
        </v-container>
      </v-container>
    </v-container>
    <v-container class="container">
      <v-aside class="aside">Aside</v-aside>
      <v-container>
        <v-header class="header">Header</v-header>
        <v-main class="main">Main</v-main>
      </v-container>
    </v-container>
    <v-container class="container">
      <v-aside class="aside">Aside</v-aside>
      <v-container>
        <v-header class="header">Header</v-header>
        <v-main class="main">Main</v-main>
        <v-footer class="footer">Footer</v-footer>
      </v-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.content {
  // display: flex;
  // flex-flow: column;
  // justify-content: center;
  // align-items: center;
  // width: 100%;
}

.container {
  border: 1px solid rgb(0, 79, 179);
  margin-bottom: 20px;
}
.header {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 100, 250);
}

.main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: rgb(203, 231, 254);
}

.aside {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 98, 214);
}

.footer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: var(--color-primary-light-hover);
}
</style>
