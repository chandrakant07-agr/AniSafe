import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Pet from "./models/petModel.js";
import { petData } from "./init/data.js";

const app = express()
const PORT = 8080
const MONGO_URL = "mongodb://127.0.0.1:27017/AniSafe";

// MongoDB connection
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB successfully connected!!!');
    initDB();
  })
  .catch(err => console.log('MongoDB connection error:', err));

// middleware for server request
// enable CORS for all requests
app.use(cors());
app.use(express.json());


const initDB = async () => {
  try {
    await Pet.deleteMany({});
    const updatedPetData = petData.map((pet) => ({
      ...pet,
      _id: new mongoose.Types.ObjectId()
    }));

    await Pet.insertMany(updatedPetData);
    console.log("Database schema successfully created...");
  } catch (err) {
    console.log("Error initializing data:", err);
  }
};


// API to get pet data
app.get("/api/pets", async (req, res) => {
  try {
    const pets = await Pet.find();
    console.log(pets);
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching pets" });
  }
});

app.listen(PORT, () => console.log(`server is listening at http://localhost:${PORT}`));