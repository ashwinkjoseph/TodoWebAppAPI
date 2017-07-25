import * as mongoose from "mongoose";

export type ReminderModel = mongoose.Document & {
  type: string,
  time: Date,
  taskID: mongoose.Schema.Types.ObjectId,
};

const ReminderSchema = new mongoose.Schema({
  taskID: mongoose.Schema.Types.ObjectId,
  time: Date,
  type: String,
});

const Reminder = mongoose.model<ReminderModel>("Reminder", ReminderSchema);
export default Reminder;
