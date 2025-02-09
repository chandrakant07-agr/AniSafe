import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
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
      required: true,
      enum: ["Male", "Female"],
    },
    city: {
      type: String,
      required: true
    },
    contact_number: {
      type: Number,
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

const Pet = mongoose.model("pet", PetSchema);

export default Pet;