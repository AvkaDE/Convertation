<template>
  <div class="page-wrapper">
    <div class="page-content">
      <AppHeader />
      <main class="content-wrapper">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "../header/AppHeader.vue";
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100dvh;
  padding: 40px 0;

  background: var(--bg-color-light);
  color: var(--text-color-primary);

  .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    max-width: 1280px;
    width: 100%;
    height: 100dvh;

    .content-wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
