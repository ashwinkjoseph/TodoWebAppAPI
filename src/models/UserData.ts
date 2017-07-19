/**
 * Created by Ashwin Joseph on 19-07-2017.
 */
import * as mongoose from "mongoose";
class obj{
    public email: string;
    public password: string;
    public name: string;
    public gender: string;
}
const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    gender: String
});
export class UserData{
    private data: obj;
    public constructor(datar: obj) {
        this.data = new obj;
        this.data.email = datar.email;
        this.data.password = datar.password;
        this.data.name = datar.name;
        this.data.gender = datar.gender;
        mongoose.model("userData", UserSchema);
    }
    public save(callback: any){
        let model = mongoose.model("userData");
        new model(this.data).save(callback);
    }
}