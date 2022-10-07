import { Request, Response } from 'express';
import loginService from '../../services/auth/loginService';

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = req.body.user;
    const password = req.body.password;
    const service = new loginService();
    const result: any = await service.login(user, password);
    const { data } = result;
    if (data) {
      const token = service.makeToken({ user });
      data.token = token;
    }
    return res.send(data);
  } catch (e) {
    return res.send({ error: e });
  }
};
