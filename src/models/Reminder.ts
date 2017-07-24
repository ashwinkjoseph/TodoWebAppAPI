import * as mongoose from "mongoose";

export type ReminderModel = mongoose.Document & {
  time: string,
  type: string,
  taskID: mongoose.Schema.Types.ObjectId,
};

const ReminderSchema = new mongoose.Schema({
  taskID: mongoose.Schema.Types.ObjectId,
  time: String,
  type: String,
});

const Reminder = mongoose.model<ReminderModel>("Reminder", ReminderSchema);
export default Reminder;
