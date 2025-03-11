import { IRentalRequest } from '../../types';
import { sendEmail } from '../../utils/sendEmail';
import { RentalHouse } from '../rentelHouse/rentel.model';
import { User } from '../user/user.model';
import { RentalRequest } from './tenant.model';

const createRentalHouseRequest = async (payload: IRentalRequest) => {
  const isUserExist = await User.findById(payload.tenant);
  if (!isUserExist) {
    throw new Error('User not Exist');
  }
  const isPropertyExist = await RentalHouse.findById(payload.property);
  console.log(isPropertyExist);
  const landLord = await User.findById(isPropertyExist?.landlord);

  if (!isPropertyExist) {
    throw new Error('Property not found');
  }
  const result = await RentalRequest.create(payload);
  sendEmail(landLord?.email);
  return result;
};
const yourRequest = async (id: string) => {
  const result = await RentalRequest.find({ tenant: id });

  return result;
};
export const rentalRequestService = {
  createRentalHouseRequest,
  yourRequest,
};
