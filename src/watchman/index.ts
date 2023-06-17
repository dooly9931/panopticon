import { WatchApi } from "../api/watch";

const api = new WatchApi();

let count = 0;

console.log("watchman up!");

const interval = setInterval(async () => {
  const res = await api.getPing();

  console.log(res);

  count++;

  if (count > 3) {
    clearInterval(interval);
  }
}, 5000);
