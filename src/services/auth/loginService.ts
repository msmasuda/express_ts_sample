import { Request } from 'express';
import jwt from 'jsonwebtoken';

export default class loginService {
  async login(user: string, password: string) {
    console.log(user, password);
    return { data: { user } };
  }

  makeToken(payload: { user: string }): string {
    const token = jwt.sign(payload, process.env['JWT_SECRET'] as string, {
      expiresIn: process.env['JWT_EXPIRE'],
    });
    return token;
  }

  static getLoginIdFromToken(req: Request) {
    const secret = process.env['JWT_SECRET'] ? process.env['JWT_SECRET'] : '';
    const auth = req.headers.authorization ? req.headers.authorization.replace('Bearer ', '') : '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jwtDecode: any = jwt.verify(auth, secret);
    const loginId = jwtDecode ? jwtDecode.user : '';
    return loginId;
  }
}
