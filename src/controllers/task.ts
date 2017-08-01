import { NextFunction, Request, Response } from "express";
import { default as Reminder, ReminderModel } from "../models/Reminder";
import { default as Task, TaskModel } from "../models/Tasks";
class TasksController {
  public add(req: Request, res: Response, next: NextFunction) {
    // logic for post
    return res.json({status: "ok"});
  }
  public remove(req: Request, res: Response, next: NextFunction) {
    // logic for DELETE
    return res.json({status: "ok"});
  }
  public update(req: Request, res: Response, next: NextFunction) {
    // logic for PUT
    return res.json({status: "ok"});
  }
  public read(req: Request, res: Response, next: NextFunction) {
    // logic for GET
    return res.json({status: "ok"});
  }
}

const taskController = new TasksController();
export default taskController;
