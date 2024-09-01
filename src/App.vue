<template>
  <LayoutWrapper>
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </LayoutWrapper>
</template>

<script setup>
import LayoutWrapper from "./components/layout/LayoutWrapper.vue";
</script>

<style scoped></style>

