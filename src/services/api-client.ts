import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6638976dab854ded943429e96d02736b",
  },
});

export default class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) =>
    axiosClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}
