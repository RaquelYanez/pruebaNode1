//aqui la funcionalidad de express
'use strict'

const express = require('express');
const api = require('./routes');
const app = express();

//midelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', api);

module.exports = app