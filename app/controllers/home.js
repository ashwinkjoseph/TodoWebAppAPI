"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
module.exports = function (app) {
    app.use("/", router);
};
router.get("/", function (req, res) {
    res.send("hey");
});
