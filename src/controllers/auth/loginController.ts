import { Request, Response } from 'express';
import loginService from '../../services/auth/loginService';

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const service = new loginService();
    const user = await service.login(email, password);
    if (user) {
      const token = service.makeToken({ email: user.email });
      return res.send({ token: token });
    } else {
      return res.status(401).send({ message: 'ログイン出来ません' });
    }
  } catch (e) {
    return res.status(500).send({ error: e });
  }
};
