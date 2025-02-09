import { z } from 'zod';

// Zod validation schema for the project
const projectSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(100, 'Title cannot be longer than 100 characters'),

    image: z
      .string()
      .min(1, 'Image URL is required')
      .url('Please provide a valid image URL'),

    liveLink: z
      .string()
      .min(1, 'Live link is required')
      .url('Please provide a valid live link'),

    description: z
      .string()
      .min(1, 'Description is required')
      .max(1000, 'Description cannot be longer than 1000 characters'),

    technologies: z
      .array(z.string())
      .min(1, 'At least one technology is required')
      .max(10, 'Technologies array cannot have more than 10 items'),
  }),
});

export { projectSchema };
