import * as mongoose from "mongoose";

export type TaskModel = mongoose.Document & {
  task: string,
  start: Date,
  end: Date,
  priority: number,
  userID: mongoose.Schema.Types.ObjectId,
  comments: string,
};

const TaskSchema = new mongoose.Schema({
  end: String,
  priority: Number,
  start: Date,
  task: Date,
  userID: mongoose.Schema.Types.ObjectId,
});
const Task = mongoose.model<TaskModel>("task", TaskSchema);
export default Task;
