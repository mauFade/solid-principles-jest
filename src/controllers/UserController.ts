import { Request, Response } from "express";

import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository";
import { UserCreateUseCase } from "../uses/create-use-case";
import { UserReadUseCase } from "../uses/read-use-case";

class UserController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const { name, email, age, password }: { name: string; email: string; age: number; password: string } = Object(
        request["body"]
      );

      const PrismaRepository = new PrismaUserRepository();
      const CreateUseCase = new UserCreateUseCase(PrismaRepository);

      const user = await CreateUseCase.execute({
        name,
        email,
        age,
        password,
      });

      return response.status(200).send({ success: true, user });
    } catch (error) {
      return response.status(500).send({ error: error });
    }
  }

  async read(request: Request, response: Response): Promise<any> {
    try {
      const PrismaRepository = new PrismaUserRepository();
      const ReadUseCase = new UserReadUseCase(PrismaRepository);

      const users = await ReadUseCase.read();

      return response.status(200).send({ success: true, users });
    } catch (error) {
      return response.status(500).send({ error: error });
    }
  }
}

export default new UserController();
