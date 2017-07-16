"use strict";
var Login = (function () {
    function Login(model) {
        this.loginModel = model;
    }
    Login.prototype.getReq = function (req, res, next) {
        res.send("hey");
    };
    Login.prototype.validate = function (req, res, next) {
        // logic
    };
    Login.prototype.getReqSignUp = function (req, res, next) {
        // logic
    };
    Login.prototype.signup = function (req, res, next) {
        // logic
    };
    return Login;
}());
module.exports = function (model) {
    return new Login(model);
};
