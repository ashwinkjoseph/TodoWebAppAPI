import * as errorHandler from "errorhandler";
import { NextFunction, Request, Response, Router } from "express";

import { default as reminderController } from "../controllers/reminder";
class Reminder {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.get("/read", reminderController.read);
    this.router.post("/add", reminderController.add);
    this.router.put("/update", reminderController.update);
    this.router.delete("/remove", reminderController.remove);
  }
}

const reminderRoutes = new Reminder();
export default reminderRoutes.router;
