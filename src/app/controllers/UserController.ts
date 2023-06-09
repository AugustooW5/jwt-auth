import { Request, Response } from "express";
import { AppDataSource } from "../../database";
import { User } from "../models/User";

const repository = AppDataSource.getRepository(User);

class UserController {
  async index(req: Request, res: Response) {
    res.send({ userId: req.userId });
  }

  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const emailExists = await repository.findOne({ 
      where: { email }
    })

    if(emailExists) {
      return res.send('E-mail já existe').status(409);
    }

    const user = repository.create({ email , password})
    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();