import { defineStore } from "pinia";
import CurrencyService from "../api/currencyService";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    pairs: {
      "usd-rub": 0,
      "eur-rub": 0,
      "brl-rub": 0,
      "kzt-rub": 0,
      "idr-rub": 0,
      "rub-usd": 0,
      "eur-usd": 0,
      "brl-usd": 0,
      "kzt-usd": 0,
      "idr-usd": 0,
      "rub-eur": 0,
      "usd-eur": 0,
      "brl-eur": 0,
      "kzt-eur": 0,
      "idr-eur": 0,
      "rub-brl": 0,
      "usd-brl": 0,
      "eur-brl": 0,
      "kzt-brl": 0,
      "idr-brl": 0,
      "rub-kzt": 0,
      "usd-kzt": 0,
      "eur-kzt": 0,
      "brl-kzt": 0,
      "idr-kzt": 0,
      "rub-idr": 0,
      "usd-idr": 0,
      "eur-idr": 0,
      "brl-idr": 0,
      "kzt-idr": 0,
    },
    mainCurrency: "usd",
  }),
  getters: {
    getPairs: (state) => state.pairs,
    getMainCurrency: (state) => state.mainCurrency,
  },
  actions: {
    async fetchCurrency() {
      const apiService = new CurrencyService();
      this.pairs = await apiService.fetchCurrencies();
    },
    changeMainCurrency(newVal: "usd" | "rub" | "eur") {
      this.mainCurrency = newVal;
    },
  },
});
