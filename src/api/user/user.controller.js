import UserService from "./user.service";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res, next) {
    try {
      console.log(req.body);
      res.json({ message: "method called" });
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      res.json({ message: "method called" });
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
