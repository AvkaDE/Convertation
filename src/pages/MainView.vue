<template>
  <div class="main-currency">
    Main currency is -
    <span class="highlited">{{ mainCurrency.toUpperCase() }}</span>
  </div>
  <div class="currency-pairs">
    <div class="currency">
      1
      <span class="highlited">
        {{ currencySymbols[currencyPairs[0].firstCurrency] }}
      </span>
      =
      {{ currencyStore.getPairs[currencyPairs[0].title] }}
      <span class="highlited">{{ currencySymbols[mainCurrency] }}</span>
    </div>
    <div class="currency">
      1
      <span class="highlited">
        {{ currencySymbols[currencyPairs[1].firstCurrency] }}
      </span>
      =
      {{ currencyStore.getPairs[currencyPairs[1].title] }}
      <span class="highlited">{{ currencySymbols[mainCurrency] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCurrencyStore } from "../store/currency";
import currencySymbols from "../constants/currencySymbols";

const currencyStore = useCurrencyStore();

const mainCurrency = computed(() => currencyStore.getMainCurrency);

const currencyPairs = computed(() => {
  if (mainCurrency.value === "rub") {
    return [
      {
        title: "usd-rub",
        firstCurrency: "usd",
      },
      {
        title: "eur-rub",
        firstCurrency: "eur",
      },
    ];
  }

  if (mainCurrency.value === "eur") {
    return [
      {
        title: "usd-eur",
        firstCurrency: "usd",
      },
      {
        title: "rub-eur",
        firstCurrency: "rub",
      },
    ];
  }

  return [
    {
      title: "rub-usd",
      firstCurrency: "rub",
    },
    {
      title: "eur-usd",
      firstCurrency: "eur",
    },
  ];
});
</script>

<style lang="scss" scoped>
.main-currency {
  font-size: 20px;
  margin-bottom: 20px;
}

.currency-pairs {
  display: flex;
  gap: 20px;

  font-size: 24px;
}

.highlited {
  color: var(--accent-color-green);
}
</style>
