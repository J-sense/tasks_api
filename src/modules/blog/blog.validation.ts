import { z } from 'zod';

// Zod schema for Blog validation under `body` field
const blogSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: 'Title is required' })
      .max(100, { message: 'Title cannot be longer than 100 characters' }),

    content: z
      .string()
      .min(1, { message: 'Content is required' })
      .max(1000, { message: 'Content cannot be longer than 1000 characters' }),

    image: z
      .string()
      .min(1, { message: 'Image URL is required' })
      .url({ message: 'Please provide a valid URL for the image' }),

    category: z
      .string()
      .min(1, { message: 'Category is required' })
      .max(50, { message: 'Category cannot be longer than 50 characters' }),
  }),
});

export { blogSchema };
