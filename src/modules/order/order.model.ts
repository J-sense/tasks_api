import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    // paymentIntentId: {
    //   type: String,
    //   required: true,
    // },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
