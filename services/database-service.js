// PostreSQL
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.STAGING_DB_URL,
  ssl: true,
  rejectUnauthorized: true
});

function connect() {
    return client.connect()
}

function get(query) {
    return new Promise((resolve, reject) => {
        client.query(query).then(results => {
            resolve(results)
        }).catch(error => {
            reject(error)
        });
    });
}

function getWithValues(query, values) {
    return new Promise((resolve, reject) => {
        client.query(query, values).then(results => {
            resolve(results)
        }).catch(error => {
            reject(error)
        });
    });
}

function post(query, values) {
    return new Promise((resolve, reject) => {
        client.query(query, values).then(results => {
            resolve(results)
        }).catch(error => {
            reject(error)
        }); 
    });
}

module.exports = {
    connect,
    get,
    getWithValues,
    post   
}