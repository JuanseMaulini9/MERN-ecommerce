import express from "express";
import dotenv from "dotenv";
import connectMongo from "./database/connectMongo";
import productsRoutes from "./routes/products.routes";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api", productsRoutes);

app.listen(process.env.PORT, () => {
  connectMongo();
  console.log("Server listen on port", process.env.PORT);
});
