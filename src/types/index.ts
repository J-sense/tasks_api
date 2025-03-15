import { Types } from 'mongoose';

export type TUserInfo = {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'landlord' | 'tenant';
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
export interface IRentalHouse {
  _id?: Types.ObjectId;
  landlord: Types.ObjectId; // Reference to the landlord (User ID)
  title: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  images: string[]; // Array of image URLs
  available?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IRentalRequest {
  tenant: string; // MongoDB ObjectId as a string
  property: string; // MongoDB ObjectId as a string
  message: string;
  moveInDate: Date;
  duration: string; // Example: "6 months", "1 year"
  status?: 'pending' | 'approved' | 'rejected'; // Optional since it has a default
  landlordPhone?: string; // Optional, only added if approved
  paymentOptionVisible?: boolean; // Optional, default is false
}
