<template>
  <input class="input-styled" v-model="model" type="number" />
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style lang="scss" scoped>
.input-styled {
  height: 32px;
  border-radius: 8px;

  border: 1px solid var(--text-color-primary);

  padding: 4px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
