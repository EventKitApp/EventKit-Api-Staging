// Firebase
const firebase = require("firebase/app");
const firebaseConfig = require('../firebaseConfig');
require('firebase/auth');

firebase.initializeApp(firebaseConfig.staging);

function createUser(email, password) {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        });
    });
}

function sendVerificationEmail() {
    return new Promise((resolve, reject) => {
        let currentUser = firebase.auth().currentUser
        currentUser.sendEmailVerification().then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    });
}

module.exports = {
    createUser,
    sendVerificationEmail
}