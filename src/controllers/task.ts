import {NextFunction, Request, Response} from "express";
import {default as Reminder, ReminderModel} from "../models/Reminder";
import {default as Task, TaskModel} from "../models/Tasks";
class TasksController {
  public add(req: Request, res: Response, next: NextFunction) {
    // logic for post
  }
  public remove(req: Request, res: Response, next: NextFunction){
    // logic for DELETE
  }
  public update(req: Request, res: Response, next: NextFunction){
    // logic for PUT
  }
  public read(req: Request, res: Response, next: NextFunction){
    // logic for GET
  }
}

const taskControllerinstance = new TasksController();
export default taskControllerinstance;
