import { db } from "../utils/db";
import bcrypt from "bcrypt";

export class UserService {
  async findAll(): Promise<object | null> {
    return await db.user.findMany();
  }

  async login(email: string, password: string): Promise<object | null> {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    const validPassword = await bcrypt.compare(password, user["password"]);
    if (!validPassword) return null;

    return user;
  }
  async findByEmail(email: string): Promise<object | null> {
    return db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
  }
  async findById(id: number): Promise<object | null> {
    return db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
  }

  async create(data): Promise<object> {
    console.log(data);
    data["password"] = await bcrypt.hash(data["password"], 12);
    console.log(data);

    return db.user.create({ data });
  }
}
