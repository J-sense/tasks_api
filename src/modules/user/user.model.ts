/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUserInfo } from '../../types';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TUserInfo>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['admin', 'landlord', 'tenant'],
      required: true,
    },
  },
  { timestamps: true },
);
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 8);
  next();
});
export const User = model<TUserInfo>('User', userSchema);
