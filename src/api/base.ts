import { IFetchRequests } from "../types";

export class BaseRest {
  private _baseURL: string;
  private _headers: Record<string, string>;

  constructor(config: { baseURL?: string; headers?: Record<string, string> }) {
    this._baseURL = config.baseURL || "";
    this._headers = config.headers || {};
  }

  private _fetchJSON<T extends keyof IFetchRequests>(
    endpoint: T,
    options?: IFetchRequests[T]["request"],
    defaultOptions: Record<string, string | undefined> = {}
  ) {
    const path =
      this._baseURL +
      endpoint +
      "?" +
      (typeof options === "object" && options !== null
        ? new URLSearchParams(Object.assign({}, options))
        : "");

    return fetch(path, {
      headers: this._headers,
      ...defaultOptions,
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data: IFetchRequests[T]["response"]) => {
        return data;
      })
      .catch((err) => {
        console.log(
          `Error while fetching ${endpoint} with options ${options}: ${err}`
        );
        return null;
      });
  }

  setHeader(key: string, value: string) {
    this._headers[key] = value;
    return this;
  }

  getHeader(key: string) {
    return this._headers[key];
  }

  get<T extends keyof IFetchRequests>(
    endpoint: T,
    options: IFetchRequests[T]["request"]
  ) {
    if (typeof options === "object" && options !== null) {
      return this._fetchJSON<T>(endpoint, Object.assign({}, options), {
        method: "GET",
      });
    }
    return this._fetchJSON<T>(endpoint, undefined, {
      method: "GET",
    });
  }
}
