<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<script lang="ts">
export default {
  data: () => ({
    menu: false,
    rounded: true,
  }),
}
</script>

<template>
  <div>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Library</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat>Home</v-btn>
        <v-btn flat>About</v-btn>
        <v-btn flat>Library</v-btn>
        <v-menu open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on"> Library Services </v-btn>
          </template>
          <v-card class="mx-auto" max-width="300" tile>
            <v-list>
              <v-list-item>Home</v-list-item>
              <v-list-item>About</v-list-item>
              <v-list-item>Library</v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-items>
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
