<template>
  <div class="page-wrapper">
    <div class="page-content">
      <nav class="nav-wrapper">
        <RouterLink
          class="nav-link"
          activeClass="active"
          :to="{ name: 'main-page' }"
        >
          Mainpage
        </RouterLink>
        <RouterLink
          class="nav-link"
          activeClass="active"
          :to="{ name: 'convert-page' }"
        >
          Convertation page
        </RouterLink>
      </nav>
      <main class="content-wrapper">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup></script>

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
    gap: 50px;

    max-width: 1280px;
    height: 100dvh;

    .nav-wrapper {
      display: flex;
      gap: 30px;

      font-size: 24px;
      line-height: 28px;

      width: 100%;

      .nav-link {
        color: var(--text-color-primary);
        transition: color 0.5s;

        &:hover {
          color: var(--accent-color-green);
        }
        &.active {
          color: var(--accent-color-green);
        }
      }
    }

    .content-wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
