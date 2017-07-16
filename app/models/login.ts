import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const loginSchema = new Schema({
	password: String,
	userName: String
});

const loginModel = mongoose.model("login", loginSchema);

module.exports = loginModel;