import axios from "axios";
import { ICurrencyGetResponse } from "../types/currency";

const API_PATH = "https://status.neuralgeneration.com/api/currency";

class CurrencyService {
  async fetchCurrencies() {
    try {
      const response = await axios.get(API_PATH);
      return response.data as ICurrencyGetResponse;
    } catch (error) {
      console.error(error);
    }
  }
}

export default CurrencyService;
