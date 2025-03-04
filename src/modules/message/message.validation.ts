import { z } from 'zod';

export const messageValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').trim(),
    email: z.string().email('Invalid email format').trim(),
    message: z.string().min(1, 'Message is required').trim(),
  }),
});
