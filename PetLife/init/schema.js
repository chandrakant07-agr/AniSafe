import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    pet_image: {
      type: String,
      required: true
    },
    pet_name: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true  
    },
    city: {
      type: String,
      required: true  
    },
    contact_number: {
      type: String,
      required: true  
    },
    animal_type: {
      type: String,
      required: true  
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Pet", petSchema);