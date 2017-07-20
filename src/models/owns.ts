/**
 * Created by Ashwin Joseph on 19-07-2017.
 */
import * as mongoose from "mongoose";
class obj{
    public user_id: mongoose.Schema.Types.ObjectId;
    public task_id: mongoose.Schema.Types.ObjectId;
}
const ownsSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    task_id: mongoose.Schema.Types.ObjectId
});
export class taskData{
    private data: obj;
    public constructor(datar: obj) {
        this.data = new obj;
        this.data.user_id = datar.user_id;
        this.data.task_id = datar.task_id;
        mongoose.model("ownsData", ownsSchema);
    }
    public save(callback: any){
        let model = mongoose.model("ownsData");
        new model(this.data).save(callback);
    }
}