"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var loginSchema = new Schema({
    password: String,
    userName: String
});
var loginModel = mongoose.model("login", loginSchema);
module.exports = loginModel;
