import { PrismaClient } from "@prisma/client";
import logger from "../../utils/logger";

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(userData) {
    try {
      const user = await this.prisma.user.create({
        data: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
        },
      });

      logger.info("user created");

      return user;
    } catch (error) {
      logger.error(error.message, error.stack);
      return null;
    }
  }

  async getUser(userId) {
    const user = await this.prisma.user.findFirst({ where: { id: userId } });
    return user;
  }

  async updateUser(userData) {
    console.log(userData);
  }

  async deleteUser(userId) {
    console.log(userId);
  }
}

export default UserService;
