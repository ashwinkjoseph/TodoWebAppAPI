/**
 * Created by Ashwin Joseph on 19-07-2017.
 */
import * as mongoose from "mongoose";
class obj{
    public time: string;
    public date: string;
    public type: string;
}
const reminderSchema = new mongoose.Schema({
    time: String,
    date: String,
    type: String
});
export class taskData{
    private data: obj;
    public constructor(datar: obj) {
        this.data = new obj;
        this.data.time = datar.time;
        this.data.date = datar.date;
        this.data.type = datar.type;
        mongoose.model("reminderData", reminderSchema);
    }
    public save(callback: any){
        let model = mongoose.model("reminderData");
        new model(this.data).save(callback);
    }
}