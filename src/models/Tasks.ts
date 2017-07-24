import * as mongoose from "mongoose";

export type TaskModel = mongoose.Document & {
  task: string,
  start: string,
  end: string,
  priority: number,
  userID: mongoose.Schema.Types.ObjectId,
  comments: string,
};

const TaskSchema = new mongoose.Schema({
  end: String,
  priority: Number,
  start: String,
  task: String,
  userID: mongoose.Schema.Types.ObjectId,
});
const Task = mongoose.model<TaskModel>("task", TaskSchema);
export default Task;
