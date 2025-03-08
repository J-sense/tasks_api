/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRentalHouse } from '../../types';
import { RentalRequest } from '../tenant/tenant.model';
import { RentalHouse } from './rentel.model';

const createHouse = async (payload: IRentalHouse) => {
  const result = (await RentalHouse.create(payload)).populate('landlord');
  return result;
};
const AllHouses = async (id: string) => {
  const result = await RentalHouse.find({ landlord: id });

  return result;
};
// Adjust this import based on your project structure

const listings = async (query: Record<string, unknown>) => {
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

const deleteHouse = async (id: string) => {
  try {
    const result = await RentalHouse.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Rental house not found');
    }
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateHouse = async (id: string, updatedData: any) => {
  try {
    const result = await RentalHouse.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!result) {
      throw new Error('Rental house not found');
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const singleHouse = async (id: string) => {
  try {
    const result = await RentalHouse.findById(id);

    if (!result) {
      throw new Error('Rental house not found');
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const getAllRentalRequest = async () => {
  const result = await RentalRequest.find();
  return result;
};
const rentalRequestUpdate = async (
  id: string,
  payload: { status: 'pending' | 'approved' | 'rejected' },
) => {
  try {
    if (!['pending', 'approved', 'rejected'].includes(payload.status)) {
      throw new Error('Invalid status value');
    }

    const updatedRequest = await RentalRequest.findByIdAndUpdate(
      id,
      { status: payload.status }, // 🔥 Fix: Correctly passing `{ status: 'rejected' }`
      { new: true },
    );

    if (!updatedRequest) {
      throw new Error('Rental request not found');
    }

    return updatedRequest;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const rentalService = {
  createHouse,
  AllHouses,
  deleteHouse,
  updateHouse,
  getAllRentalRequest,
  rentalRequestUpdate,
  listings,
  singleHouse,
};
