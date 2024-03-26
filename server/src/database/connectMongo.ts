import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("base de datos conectada");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error en la conexion de la base de datos", error.message);
    }
  }
};

export default connectMongo;
