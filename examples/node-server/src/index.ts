import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
dotenv.config();

import rootRouter from "./routes/root";

const main = async () => {
  const app = express();
  const PORT = process.env.PORT || "8001";

  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/", rootRouter);

  app.listen(parseInt(PORT), "0.0.0.0", () => {
    console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
  });
};

main();
