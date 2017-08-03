import { NextFunction, Request, Response } from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import * as request from "request-promise-native";
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
        res.status(500).json({status: "failed"});
      }
      else {
        Task.findOne().sort({created_at: -1}).exec((err, id: TaskModel) => {
          request({
            formData: {
              taskID: new mongoose.Schema.Types.ObjectId(id._id),
              time: req.body.time,
              type: req.body.type,
            },
            method: "POST",
            uri: "http://localhost:3000/reminder/add",
          }).then((body) => {
            res.status(200).json({status: "ok"});
          }).catch((err) => {
            res.status(500).json({status: "failed"});
          });
        });
      }
    });
  }
  public remove(req: Request, res: Response, next: NextFunction) {
    // logic for DELETE
    Task.remove({
      _id : new mongoose.Schema.Types.ObjectId(req.params.taskID),
    }).exec((err, task) => {
      if (err) {
        res.status(500).json({status: err});
      }
      else {
        res.status(200).json({status: "Success"});
      }
    });
    res.status(200).json({status: "ok"});
  }
  public update(req: Request, res: Response, next: NextFunction) {
    // logic for PUT
    Task.findById(req.params.taskID).exec((err, task: TaskModel) => {
      task.comments = req.body.comments;
      task.end = new Date(req.body.end);
      task.priority = Number(req.body.priority);
      task.start = new Date(req.body.start);
      task.task = req.body.task;
      task.userID = new mongoose.Schema.Types.ObjectId(req.body.id);
      task.save((err) => {
        if (err) {
          res.status(500).json({status: err});
        }
        else {
          res.status(500).json({status: "ok"});
        }
      });
    });
    res.status(200).json({status: "ok"});
  }
  public read(req: Request, res: Response, next: NextFunction) {
    // logic for GET
    Task.find((err, tasks) => {
      if (err) {
        res.status(500).json({status: "failed"});
      }
      else {
        res.status(200).json(tasks);
      }
    });
    res.status(200).json({status: "ok"});
  }

  public readParticular(req: Request, res: Response, next: NextFunction) {
    Task.findById(req.params.taskID).exec((err, task: TaskModel) => {
      if (err) {
        res.status(500).json({status: err});
      }
      else {
        res.status(200).json(task);
      }
    });
  }

}

const taskController = new TasksController();
export default taskController;
