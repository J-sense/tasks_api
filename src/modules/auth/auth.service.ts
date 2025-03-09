import { TUserInfo } from '../../types';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
const register = async (payload: TUserInfo) => {
  const result = await User.create(payload);
  return result;
};
const login = async (payload: { email: string; password: string }) => {
  const isUserExist = await User.findOne({ email: payload.email });
  if (!isUserExist) {
    throw new Error('User Not Exist!');
  }
  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    isUserExist?.password,
  );
  if (!isPasswordMatch) {
    throw new Error('Please! provide the correct password');
  }
  const jwtPayload = {
    // userId: isUserExist,
    userId: isUserExist._id,
    role: isUserExist.role,
    email: isUserExist.email,
  };
  const token = jwt.sign(jwtPayload, 'secret', { expiresIn: '30d' });
  return { token, isUserExist };
};

interface UpdateUserPayload {
  oldPassword: string;
  newPassword?: string;
  newEmail?: string;
}

export const updateUserCredentials = async (
  userData: JwtPayload,
  payload: UpdateUserPayload,
) => {
  // Find user by email
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new Error('User not found!');
  }

  // Verify old password
  const isMatch = await bcrypt.compare(payload.oldPassword, user.password);
  if (!isMatch) {
    throw new Error('Old password is incorrect!');
  }

  const updateFields: Partial<{ email: string; password: string }> = {};

  // Update email if provided
  if (payload.newEmail) {
    updateFields.email = payload.newEmail;
  }

  // Update password if provided
  if (payload.newPassword) {
    updateFields.password = await bcrypt.hash(payload.newPassword, 8);
  }

  // Update the user in the database
  await User.findOneAndUpdate({ email: userData.email }, updateFields, {
    new: true,
  });

  return { message: 'User credentials updated successfully' };
};

export const authServices = {
  register,
  login,
  updateUserCredentials,
};
