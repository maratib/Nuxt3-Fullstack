import { db } from "../utils/db";

export class UserService {
  async findAll(): Promise<object | null> {
    return await db.user.findMany();
  }
  async findByEmail(email: string): Promise<object | null> {
    return db.user.findUnique({
      where: {
        email,
      },
    });
  }
}
