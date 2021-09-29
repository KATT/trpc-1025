import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "./server";

const app = express();

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({ router: appRouter })
);

app.use("/", express.static("../client/dist"));

app.listen(10020, () => {
  console.log("Listening on :10020");
});
