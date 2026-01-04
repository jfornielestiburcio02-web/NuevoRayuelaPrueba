import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables del .env

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar:", err));
