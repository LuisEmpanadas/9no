import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    Description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const Card = mongoose.model("Card", cardSchema);
