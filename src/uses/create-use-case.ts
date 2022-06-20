import { UserRepository } from "../repositories/UserRepository";

interface CreateUserDataRequest {
  name: string;
  email: string;
  age: number;
  password: string;
}

export class UserCreateUseCase {
  constructor(private userRepo: UserRepository) {}
  async execute(request: CreateUserDataRequest) {
    const { name, email, age, password } = request;

    if (!name) {
      throw new Error("Name is required.");
    }

    if (!email) {
      throw new Error("Email is required.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    const user = await this.userRepo.create({
      name,
      email,
      age,
      password,
    });

    return user;
  }
}
