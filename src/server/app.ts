import express from "express";
import { PORT } from "./constants";

const app = express();

app.get("/", async (req, res) => {
  await new Promise((res) => setTimeout(res, 1000));
  res.send("ping after 1sec");
});

app.listen(PORT, () => {
  console.log(`panopticon server listening on port ${PORT}`);
});
