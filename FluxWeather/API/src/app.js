const express = require('express');
const app = express();
const index = require('./routes/index');

app.use('/weather', index);

module.exports = app;