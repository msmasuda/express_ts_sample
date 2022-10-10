import { Request, Response } from 'express';
import loginService from '../../services/auth/loginService';

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const service = new loginService();
    const user = await service.login(email, password);
    // let token;
    if (user) {
      const token = service.makeToken({ email: user.email });
      return res.send(token);
    } else {
      return res.status(400).end();
    }
  } catch (e) {
    return res.send({ error: e });
  }
};
