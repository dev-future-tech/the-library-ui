<script setup lang="ts">
defineProps<{
  product_name: string
  product_description: string
}>()
</script>

<template>
  <div class="product_frame">
    <h1>{{ product_name }}</h1>
    <div>{{ product_description }}</div>
  </div>
</template>
