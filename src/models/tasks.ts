/**
 * Created by Ashwin Joseph on 19-07-2017.
 */
import * as mongoose from "mongoose";
class obj{
    public task: string;
    public start: string;
    public end: string;
    public priority: string;
}
const taskSchema = new mongoose.Schema({
    task: String,
    start: String,
    end: String,
    priority: Number
});
export class taskData{
    private data: obj;
    public constructor(datar: obj) {
        this.data = new obj;
        this.data.task = datar.task;
        this.data.start = datar.start;
        this.data.end = datar.end;
        this.data.priority = datar.priority;
        mongoose.model("taskData", taskSchema);
    }
    public save(callback: any){
        let model = mongoose.model("taskData");
        new model(this.data).save(callback);
    }
}