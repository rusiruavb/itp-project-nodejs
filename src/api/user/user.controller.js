import UserService from "./user.service";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res, next) {
    try {
      const user = await this.userService.createUser(req.body);
      res.json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await this.userService.getUser(req.body.userId);
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      res.json({ message: "method called" });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      res.json({ message: "method called" });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
