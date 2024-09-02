<template>
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
    <div class="select-wrapper">
      <DropDown
        :data="CURRENCIES"
        :shownText="mainCurrency"
        v-model="localSelectedMainCurrency"
      />
    </div>
  </nav>
</template>

<script setup>
import { useCurrencyStore } from "../../store/currency";
import DropDown from "../dropdown/DropDown.vue";
import CURRENCIES from "../../constants/currencies";
import { computed, ref, watch } from "vue";

const currencyStore = useCurrencyStore();

const mainCurrency = computed(() => currencyStore.getMainCurrency);

const localSelectedMainCurrency = ref(currencyStore.mainCurrency);

watch(localSelectedMainCurrency, (n) => {
  currencyStore.changeMainCurrency(n);
});
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  font-size: 24px;
  line-height: 28px;

  width: 100%;

  .nav-link {
    color: var(--text-color-primary);
    transition: color 0.5s;

    &.active {
      color: var(--accent-color-green);
    }
  }

  .select-wrapper {
    font-size: 16px;
    line-height: normal;
    flex: none;

    height: 36px;
  }
}
</style>
