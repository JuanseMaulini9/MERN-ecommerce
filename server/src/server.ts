import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hola chamacos");
});

app.listen(process.env.PORT, () => {
  console.log("Server listen on port", process.env.PORT);
});
