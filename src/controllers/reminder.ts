import { NextFunction, Request, Response } from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import * as request from "request-promise-native";
import { default as Reminder, ReminderModel } from "../models/Reminder";
class ReminderController {
  public add(req: Request, res: Response, next: NextFunction) {
    // logic for post
    const reminder: ReminderModel = new Reminder({
      taskID: req.body.taskID,
      time: moment(req.body.time, "HH:mm:ss"),
      type: req.body.type,
    });
    reminder.save((err) => {
      res.json({status: "ok"});
    });
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
    return res.render("");
  }
}

const reminderController = new ReminderController();
export default reminderController;
