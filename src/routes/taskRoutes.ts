import * as errorHandler from "errorhandler";
import { NextFunction, Request, Response, Router } from "express";

import { default as taskController } from "../controllers/task";
class Task {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.get("/read", taskController.read);
    this.router.post("/add", taskController.add);
    this.router.put("/update/:taskID", taskController.update);
    this.router.delete("/remove/:taskID", taskController.remove);
  }
}

const TaskRoutes = new Task();
export default TaskRoutes.router;
