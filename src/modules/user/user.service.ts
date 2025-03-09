/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUserInfo } from '../../types';
import { RentalHouse } from '../rentelHouse/rentel.model';
import { User } from './user.model';

const createAdmin = async (payload: TUserInfo) => {
  payload.role = 'admin';
  const result = await User.create(payload);
  return result;
};
const getAllUser = async () => {
  const result = await User.find();
  return result;
};
const AllUser = async () => {
  const result = await User.find();
  return result;
};
const getAllHouse = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  // Extract search term
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  // Construct Search Query (Search by location)
  const searchQuery = searchTerm
    ? {
        $or: ['location'].map((field) => ({
          [field]: { $regex: searchTerm, $options: 'i' },
        })),
      }
    : {}; // Empty if no search term provided

  // Handle price filtering (Min to Max)
  let priceFilter = {};
  if (query?.minPrice || query?.maxPrice) {
    priceFilter = {
      rentAmount: {
        ...(query.minPrice ? { $gte: Number(query.minPrice) } : {}),
        ...(query.maxPrice ? { $lte: Number(query.maxPrice) } : {}),
      },
    };
  }

  // Exclude non-filter fields from queryObj
  const excludes = ['searchTerm', 'minPrice', 'maxPrice'];
  excludes.forEach((el) => delete queryObj[el]);

  // Merge all filters
  const finalQuery = { ...searchQuery, ...priceFilter, ...queryObj };

  // Fetch rentals from database
  const result = await RentalHouse.find(finalQuery);
  return result;
};
const delateUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};
const delateAHouse = async (id: string) => {
  const result = await RentalHouse.findByIdAndDelete(id);
  if (!result) {
    throw new Error('House not found');
  }
  return result;
};
const updateUserRole = async (
  id: string,
  payload: { role: 'tenant' | 'landlord' | 'admin' },
) => {
  try {
    // Check if the user exists
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    // Validate role
    if (!['tenant', 'landlord', 'admin'].includes(payload.role)) {
      throw new Error('Invalid role provided');
    }

    // Update the user role
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role: payload.role },
      { new: true }, // Returns the updated user
    );

    return updatedUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const adminService = {
  createAdmin,
  getAllUser,
  delateUser,
  getAllHouse,
  delateAHouse,
  updateUserRole,
  AllUser,
};
