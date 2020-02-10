// Database Service
const DatabaseService = require('../services/database-service');
DatabaseService.connect()

// Authentication Service
const AuthenticationService = require('../services/firebase-service');

function getAllUsers(req, res) {
    DatabaseService.get('SELECT * FROM users ORDER BY id ASC').then(results => {
        res.status(200).send({success: true, response: results.rows, error: null});
    }).catch(error => {
        res.status(400).send({success: false, response: null, error: error});
    });
}

function getUser(req, res) {
    let userId = req.body.uid
    console.log(userId);
    DatabaseService.getWithValues('SELECT * FROM users WHERE firebase_id = vEQACn7uZncY9r3Plhm1u6WtCZj2').then(results => {
        res.status(200).send({success: true, response: results.rows, error: null});
    }).catch(error => {
        res.status(400).send({success: false, response: null, error: error});
    });
}

function createUser(req, res) {
    let userInfo = req.body
    AuthenticationService.createUser(userInfo.email, userInfo.password).then(response => {
        DatabaseService.post('INSERT INTO users (firebase_id, first_name, last_name, email, phone) VALUES ($1, $2, $3, $4, $5)',[response.user.uid, userInfo.first_name, userInfo.last_name, userInfo.email, userInfo.phone]).then(response => {
            AuthenticationService.sendVerificationEmail().then(() => {
                res.status(200).send({success: true, response: response, error: null});
            })
        }).catch(error => {
            res.status(400).send({success: false, response: null, error: error});
        });
    }).catch(error => {
        res.status(400).send({success: false, response: null, error: error});
    });
}

module.exports = {
    getAllUsers,
    createUser,
    getUser
}
