import express from "express";
import { getProducts, postProducts } from "../controllers/products.controller";

const router = express.Router();

router.get("/products", getProducts);

router.post("/products", postProducts);

export default router;
