import { z } from 'zod';

// Create a Zod schema for user creation
export const createUserValidation = z.object({
  body: z.object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters') // Username should have a minimum length of 3
      .max(30, 'Username must be at most 30 characters') // Username should not exceed 30 characters
      .trim(), // Removing unnecessary spaces around the username
    email: z
      .string()
      .email('Invalid email format') // Ensures the email follows the correct email format
      .trim(), // Trimming spaces around the email
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters') // Password must have a minimum length of 6 characters
      .max(50, 'Password must be at most 50 characters'), // Password should not exceed 50 characters
    // Validate against special characters and spaces
    role: z.enum(['admin', 'landlord', 'tenant']).optional(), // Only 'admin', 'landlord', or 'tenant' are valid roles, optional
  }),
});
