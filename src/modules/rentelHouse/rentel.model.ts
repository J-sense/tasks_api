import { Schema, model, Types } from 'mongoose';

const rentalHouseSchema = new Schema(
  {
    landlord: {
      type: Types.ObjectId,
      ref: 'User', // Links to the landlord in the User collection
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    rentAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    bedrooms: {
      type: Number,
      required: true,
      min: 1,
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    available: {
      type: Boolean,
      default: true, // Availability status
    },
  },
  { timestamps: true },
);

export const RentalHouse = model('RentalHouse', rentalHouseSchema);
