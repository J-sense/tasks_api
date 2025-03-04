/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRentalHouse } from '../../types';
import { RentalRequest } from '../tenant/tenant.model';
import { RentalHouse } from './rentel.model';

const createHouse = async (payload: IRentalHouse) => {
  const result = (await RentalHouse.create(payload)).populate('landlord');
  return result;
};
const AllHouses = async (id: string) => {
  const result = await RentalHouse.findById(id);
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
};
