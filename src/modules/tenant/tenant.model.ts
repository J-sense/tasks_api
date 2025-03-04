import { model, Schema } from 'mongoose';
const rentalRequestSchema = new Schema(
  {
    tenant: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the tenant user who is making the request
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: 'RentalHouse', // Reference to the rental house that the tenant is requesting
      required: true,
    },
    message: {
      type: String,
      required: true,
      minlength: 10, // Minimum length for the request message
    },
    moveInDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: String, // E.g., "6 months", "1 year"
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending', // Default status is "pending"
    },
    landlordPhone: {
      type: String,
      required: false, // Only added if the request is approved
    },
    paymentOptionVisible: {
      type: Boolean,
      default: false, // Becomes true when the request is approved
    },
  },
  { timestamps: true },
);

// Create the RentalRequest model
export const RentalRequest = model('RentalRequest', rentalRequestSchema);
