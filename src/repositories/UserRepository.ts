export interface CreateUserData {
  name: string;
  email: string;
  age: number;
  password: string;
}

export interface UserRepository {
  create: (data: CreateUserData) => Promise<any>;
  read: () => Promise<any>;
}
