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
      if (err) {
        res.json({status: "error"});
      }
      res.json({status: "ok"});
    });
  }
  public remove(req: Request, res: Response, next: NextFunction) {
    // logic for DELETE
    Reminder.remove({
      _id : new mongoose.Schema.Types.ObjectId(req.params.reminderID),
    }).exec((err, reminder) => {
      if (err) {
        res.status(500).json({status: err});
      }
      else {
        res.status(200).json({status: "Success"});
      }
    });
    return res.json({status: "ok"});
  }
  public update(req: Request, res: Response, next: NextFunction) {
    // logic for PUT
    Reminder.findById(req.params.taskID).exec((err, reminder: ReminderModel) => {
      reminder.time = new Date(req.body.time);
      reminder.type = req.body.type;
      reminder.save((err) => {
        if (err) {
          res.status(500).json({status: err});
        }
        else {
          res.status(500).json({status: "ok"});
        }
      });
    });
    return res.json({status: "ok"});
  }
  public read(req: Request, res: Response, next: NextFunction) {
    // logic for GET
    Reminder.find((err, reminders) => {
      if (err) {
        res.status(500).json({status: "failed"});
      }
      else {
        res.status(200).json(reminders);
      }
    });
    return res.render("");
  }
  public readParticular(req: Request, res: Response, next: NextFunction) {
    Reminder.findById(req.params.taskID).exec((err, reminder: ReminderModel) => {
      if (err) {
        res.status(500).json({status: err});
      }
      else {
        res.status(200).json(reminder);
      }
    });
  }
}

const reminderController = new ReminderController();
export default reminderController;
