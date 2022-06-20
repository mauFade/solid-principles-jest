import express from "express";

import router from "./router";

const app = express();
const port: number = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.info(`HTTP server started at port ${port}`);
});
