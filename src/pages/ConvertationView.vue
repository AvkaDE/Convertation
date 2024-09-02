<template>
  <div class="convertation-page-wrapper">
    <div class="currency-block">
      <NumberInput v-model="firstCurrencyValue" />
      <DropDown
        :data="CURRENCIES"
        :shownText="selectedFirstCurrency"
        v-model="selectedFirstCurrency"
      />
      <div class="additional-data">
        1
        <span class="currency-symbol">
          {{ CURRENCY_SYMBOLS[selectedFirstCurrency] }}
        </span>
        =
        {{
          currencyStore.getPairs[
            `${selectedFirstCurrency}-${selectedSecondCurrency}`
          ]
        }}
        <span class="currency-symbol">
          {{ CURRENCY_SYMBOLS[selectedSecondCurrency] }}
        </span>
      </div>
    </div>
    <div class="separator">
      <img src="../assets/arrows-up-down.png" alt="" />
    </div>
    <div class="currency-block">
      <NumberInput v-model="secondCurrencyValue" />
      <DropDown
        :data="CURRENCIES"
        :shownText="selectedSecondCurrency"
        v-model="selectedSecondCurrency"
      />
      <div class="additional-data">
        1
        <span class="currency-symbol">
          {{ CURRENCY_SYMBOLS[selectedSecondCurrency] }}
        </span>
        =
        {{
          currencyStore.getPairs[
            `${selectedSecondCurrency}-${selectedFirstCurrency}`
          ]
        }}
        <span class="currency-symbol">
          {{ CURRENCY_SYMBOLS[selectedFirstCurrency] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import NumberInput from "../components/numberInput/NumberInput.vue";
import DropDown from "../components/dropdown/DropDown.vue";
import CURRENCY_SYMBOLS from "../constants/currencySymbols";
import { useCurrencyStore } from "../store/currency";
import CURRENCIES from "../constants/currencies";

const currencyStore = useCurrencyStore();

const firstCurrencyValue = ref(0);
const selectedFirstCurrency = ref("usd");
const secondCurrencyValue = ref(123);
const selectedSecondCurrency = ref("rub");
let isUpdating = false;

const financial = (x) => {
  return Number.parseFloat(x).toFixed(2);
};

watch(firstCurrencyValue, async (newFirst) => {
  if (isUpdating) return;

  isUpdating = true;
  const coefficient =
    currencyStore.getPairs[
      selectedFirstCurrency.value + "-" + selectedSecondCurrency.value
    ];

  secondCurrencyValue.value =
    secondCurrencyValue.value !== 0
      ? financial(newFirst * coefficient)
      : financial(coefficient);

  await nextTick();
  isUpdating = false;
});

watch(secondCurrencyValue, async (newSecond) => {
  if (isUpdating) return;

  isUpdating = true;
  const coefficient =
    currencyStore.getPairs[
      selectedSecondCurrency.value + "-" + selectedFirstCurrency.value
    ];

  firstCurrencyValue.value =
    firstCurrencyValue.value !== 0
      ? financial(newSecond * coefficient)
      : financial(coefficient);

  await nextTick();
  isUpdating = false;
});

watch(
  [selectedFirstCurrency, selectedSecondCurrency],
  async (newValues, oldValues) => {
    if (!isUpdating) {
      isUpdating = true;
      console.log(newValues, oldValues);

      if (newValues[1] !== oldValues[1]) {
        const coefficientToSecond =
          currencyStore.getPairs[
            selectedFirstCurrency.value + "-" + selectedSecondCurrency.value
          ];
        secondCurrencyValue.value = financial(
          +firstCurrencyValue.value * coefficientToSecond
        );
      }

      if (newValues[0] !== oldValues[0]) {
        const coefficientToFirst =
          currencyStore.getPairs[
            selectedSecondCurrency.value + "-" + selectedFirstCurrency.value
          ];
        firstCurrencyValue.value = financial(
          +secondCurrencyValue.value * coefficientToFirst
        );
      }

      await nextTick();
      isUpdating = false;
    }
  }
);
</script>

<style lang="scss" scoped>
.convertation-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .separator {
    img {
      width: 20px;
      height: 20px;
    }
  }

  .currency-block {
    display: flex;
    gap: 10px;
    align-items: center;

    .additional-data {
      font-size: 22px;
    }

    .currency-symbol {
      color: var(--accent-color-green);
      font-size: 22px;
    }
  }
}
</style>
