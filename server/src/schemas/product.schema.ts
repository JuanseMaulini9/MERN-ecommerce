import mongoose, { mongo } from "mongoose";
import { ProductInterface } from "../types";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
});

const Product = mongoose.model<ProductInterface>("Product", ProductSchema);
export default Product;
