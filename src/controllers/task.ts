import { NextFunction, Request, Response } from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import * as request from "request-promise-native";
import { default as Reminder, ReminderModel } from "../models/Reminder";
import { default as Task, TaskModel } from "../models/Tasks";
class TasksController {
  public add(req: Request, res: Response, next: NextFunction) {
    // logic for post
    const task: TaskModel = new Task({
      comments:  req.body.comments,
      end: moment(req.body.end),
      priority: Number(req.body.priority),
      start: moment(req.body.start),
      task: req.body.task,
      userID: new mongoose.Schema.Types.ObjectId(req.body.id),
    });
    task.save((err) => {
      if (err) {
        return next(err);
      }
      else {
        Task.findOne().sort({created_at: -1}).exec((err, id) => {
          request({
            formData: {
              taskID: mongoose.Schema.Types.ObjectId,
              time: req.body.time,
              type: req.body.type,
            },
            method: "POST",
            uri: "http://localhost:3000/reminder/add",
          }).then((body) => {
            res.json({status: "ok"});
          }).catch((err) => {
            res.json({status: "failed"});
          });
        });
      }
    });
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
    return res.render("");
  }
}

const taskController = new TasksController();
export default taskController;
