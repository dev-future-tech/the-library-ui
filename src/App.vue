<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Library</v-toolbar-title>
    </v-toolbar>
  </div>
  <br />
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
