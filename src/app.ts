import express, { Application } from "express";
import router from "./routes/v1/index";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use("/v1", router);

export default app;
