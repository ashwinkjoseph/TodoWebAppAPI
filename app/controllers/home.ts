import * as express from "express";

const router = express.Router();

module.exports = function (app: any){
 app.use("/", router);
};

router.get("/", function(req, res){
 res.send("hey");
});