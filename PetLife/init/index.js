import mongoose from "mongoose";
import { petData } from "./data.js";  
import Pet from "./schema.js";  

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