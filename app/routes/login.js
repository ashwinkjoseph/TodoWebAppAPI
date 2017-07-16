var login = require('../models/login');
var loginController = require('../controllers/login')(login);

module.exports = function(app) {

    app.get('/login', loginController.getReq);

    app.post('/login', loginController.validate);

    app.get('/signup', loginController.getReqSignUp);

    app.get('/signup', loginController.signup);

}