import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/hospital.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({ credentials: true, origin: "https://sicu-aura-2929.onrender.com" })
);
app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

app.use("/api/hospital", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
