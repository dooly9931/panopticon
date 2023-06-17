import axios, { Axios } from "axios";
import { PORT } from "../server/constants";

export class WatchApi {
  api: Axios;

  constructor() {
    this.api = axios.create({
      baseURL: `http://panopticon-server:${PORT}`,
      timeout: 3000,
    });
  }

  async getPing() {
    const res = await this.api.get("/");

    return res.data;
  }
}
