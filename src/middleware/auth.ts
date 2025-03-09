import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/user/user.model';
export const USER_ROLE = {
  admin: 'admin',
  landlord: 'landlord',
  tenant: 'tenant',
} as const;
export type TUserRole = keyof typeof USER_ROLE;
const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error('You are not authorized');
    }
    const decode = jwt.verify(token, 'secret') as JwtPayload;
    const { email, role } = decode;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('user not found');
    }
    if (requiredRole && !requiredRole.includes(role)) {
      throw new Error('You are not authorized');
    }

    req.user = decode as JwtPayload; // Attach decoded payload to `req.user`
    next();
  });
};
export default auth;
