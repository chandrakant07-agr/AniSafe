import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';  // Importing cors

import Pet from './schema.js';  

const app = express();
const port = 5000;

// Enable CORS for all requests
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/AniSafe')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());

// API to get pet data
app.get("/pets", async (req, res) => {
    try {
      const pets = await Pet.find();
      res.json(pets);
    } catch (err) {
      res.status(500).json({ message: "Error fetching pets" });
    }
  });


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
