import { model, Schema } from 'mongoose';
import { IForm } from './blog.interface';

// Define the TypeScript interface for strong typing

// Mongoose schema definition
const formSchema = new Schema<IForm>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }, // Automatically adds createdAt & updatedAt
);

export const Blogs = model<IForm>('Blog', formSchema);
