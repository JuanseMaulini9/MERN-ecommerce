import { Request, Response } from "express";
import Product from "../schemas/product.schema";
import { ProductInterface } from "../types";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const postProducts = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { name, price, description } = req.body;

    if (
      typeof name === "string" &&
      typeof price === "string" &&
      typeof description === "string"
    ) {
      const newProduct = new Product({
        name,
        price,
        description,
      });
      newProduct.save();

      res.status(201).json({ message: "el producto se creo con exito" });
    } else {
      throw new Error();
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
