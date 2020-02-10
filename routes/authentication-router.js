var AuthenticationController = require('../controllers/authentication-controller');
var express = require('express');
var router = express.Router();

router
.route('/getAll')
.get(AuthenticationController.getAllUsers);

router
.route('/create')
.post(AuthenticationController.createUser);

router
.route('/get')
.post(AuthenticationController.getUser);

module.exports = router;