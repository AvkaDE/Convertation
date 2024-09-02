<template>
  <LayoutWrapper>
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </LayoutWrapper>
</template>

<script setup>
import LayoutWrapper from "./components/layout/LayoutWrapper.vue";
import { useCurrencyStore } from "./store/currency";

const currencyStore = useCurrencyStore();

currencyStore.fetchCurrency();
</script>

<style scoped></style>

