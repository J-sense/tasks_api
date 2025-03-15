import Stripe from 'stripe';
import { NextFunction, Request, Response } from 'express';
import Order from './order.model'; // Import your Mongoose Order model

const stripe = new Stripe(
  'sk_test_51R0cEKLJ6NnJkDHDeOOTmH3mdg9GjIFSMtn64rcwc1eR6NkSOZUyOZ6AfmGKc0xdTIUnPBETrvWViDyAoecTynGG00FLe1tzZ7',
); // Use environment variable for the secret key

const order = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Extract user ID and amount from request
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      res.status(400).json({ message: 'User ID and amount are required' });
    }

    // Stripe requires line_items, so we create a single entry with the total amount
    const lineItems = [
      {
        price_data: {
          currency: 'bdt', // Adjust currency as per your need
          product_data: {
            name: 'Custom Payment', // Generic name for the payment
          },
          unit_amount: amount * 100, // Convert amount to smallest currency unit (e.g., paisa)
        },
        quantity: 1,
      },
    ];

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url:
        'https://bashafinder-n7tg90lpf-jsenses-projects.vercel.app/success', // Dynamic session ID
      cancel_url: 'http://localhost:3000/cancel',
      metadata: { userId }, // Store userId for reference
    });

    // Save order to MongoDB
    const newOrder = new Order({
      userId,
      amount,
      paymentIntentId: session.id,
      status: 'pending',
    });

    await newOrder.save();

    // Send session ID to frontend for Stripe checkout redirection
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating order:', error);
    next(error); // Pass the error to the error-handling middleware
  }
};

export const orderController = {
  order,
};
