/**
 * Created by Ashwin Joseph on 19-07-2017.
 */
import * as mongoose from "mongoose";
class obj{
    public task_id: mongoose.Schema.Types.ObjectId;
    public reminder_id: mongoose.Schema.Types.ObjectId;
}
const hasSchema = new mongoose.Schema({
    task_id: mongoose.Schema.Types.ObjectId,
    reminder_id: mongoose.Schema.Types.ObjectId
});
export class taskData{
    private data: obj;
    public constructor(datar: obj) {
        this.data = new obj;
        this.data.task_id = datar.task_id;
        this.data.reminder_id = datar.reminder_id;
        mongoose.model("hasData", hasSchema);
    }
    public save(callback: any){
        let model = mongoose.model("hasData");
        new model(this.data).save(callback);
    }
}