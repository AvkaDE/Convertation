import { ICurrencyGetResponse } from "./currency";

export interface IFetchRequests {
  "currency/get": {
    response: ICurrencyGetResponse;
    request: undefined;
  };
}
