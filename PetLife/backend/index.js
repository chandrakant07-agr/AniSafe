import express from "express";
import mongoose from "mongoose";
import { petData } from "./init/data.js";  
import Pet from "./init/schema.js";  

const app = express()
const PORT = 8080
const MONGO_URL = "mongodb://127.0.0.1:27017/AniSafe";


main()
  .then(() => {
    console.log("Connected to DB");
    initDB(); 
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Pet.deleteMany({}); 
    const updatedPetData = petData.map((pet) => ({
      ...pet, 
      _id: new mongoose.Types.ObjectId() 
    }));
    await Pet.insertMany(updatedPetData);  
    console.log("Data was initialized successfully");
  } catch (err) {
    console.log("Error initializing data:", err);
  }
};

app.listen(PORT, () => console.log(`server is listening at http://localhost:${PORT}`));