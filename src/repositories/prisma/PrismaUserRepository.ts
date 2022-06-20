import { CreateUserData, UserRepository } from "../UserRepository";
import { prisma } from "../../helpers/prisma";

export class PrismaUserRepository implements UserRepository {
  async create({ name, email, age, password }: CreateUserData) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        age,
        password,
      },
    });

    return user;
  }

  async read() {
    const users = await prisma.user.findMany();

    return users;
  }
}
