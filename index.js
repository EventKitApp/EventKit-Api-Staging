// Dotenv
require('dotenv').config()

// Moment
const Moment = require('moment');

// UUID
const UUID = require('uuid/v4');

// BodyParser
const bodyParser = require('body-parser');

// Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const router = require('./routes/main-router');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
router(app);

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
