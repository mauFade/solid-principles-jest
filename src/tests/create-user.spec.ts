import { UserCreateUseCase } from "../uses/create-use-case";

const createSpy = jest.fn();
const readSpy = jest.fn();

describe("Create a user", () => {
  const createUser = new UserCreateUseCase({ create: createSpy, read: readSpy });

  it("Should be able to create a user", async () => {
    await expect(
      createUser.execute({
        name: "test",
        email: "test@test.com",
        age: 21,
        password: "testhash",
      })
    ).resolves.not.toThrow();

    expect(createSpy).toHaveBeenCalled();
  });

  it("Should throw error if there's no name", async () => {
    await expect(
      createUser.execute({
        name: "",
        email: "test@test.com",
        age: 21,
        password: "testhash",
      })
    ).rejects.toThrow();
  });

  it("Should throw error if there's no email", async () => {
    await expect(
      createUser.execute({
        name: "Test",
        email: "",
        age: 21,
        password: "testhash",
      })
    ).rejects.toThrow();
  });

  it("Should throw error if there's no password", async () => {
    await expect(
      createUser.execute({
        name: "Test",
        email: "test@test.com",
        age: 21,
        password: "",
      })
    ).rejects.toThrow();
  });
});
