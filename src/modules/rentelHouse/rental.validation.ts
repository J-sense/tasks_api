import { z } from 'zod';

export const createRentalHouseValidation = z.object({
  body: z.object({
    landlord: z.string().min(24, 'Invalid landlord ID'), // Mongoose ObjectId length check
    title: z.string().min(5, 'Title must be at least 2 characters'),
    location: z.string().min(3, 'Location must be at least 1 characters'),
    description: z
      .string()
      .min(10, 'Description must be at least 2 characters'),
    rentAmount: z.number().min(1, 'Rent amount must be greater than 0'),
    bedrooms: z.number().min(1, 'Number of bedrooms must be at least 1'),
    images: z
      .array(z.string().url('Invalid image URL'))
      .min(1, 'At least one image is required'),
    available: z.boolean().optional(),
  }),
});

// Zod validation schema for updating rental house data
export const updateRentalHouseSchema = z.object({
  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .optional(),
  rentAmount: z
    .number()
    .positive('Rent amount must be a positive number')
    .optional(),
  numBedrooms: z
    .number()
    .int()
    .positive('Number of bedrooms must be a positive integer')
    .optional(),
});
