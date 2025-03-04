import { z } from 'zod';

export const rentalRequestValidationSchema = z.object({
  body: z.object({
    message: z.string().min(1, 'Message must be at least 1 characters long'),

    moveInDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid move-in date',
    }),

    duration: z.string().min(3, 'Duration is required'), // Example: "6 months"

    status: z.enum(['pending', 'approved', 'rejected']).optional(),

    landlordPhone: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number'), // Validates phone numbers
    paymentOptionVisible: z.boolean().optional(),
  }),
});
