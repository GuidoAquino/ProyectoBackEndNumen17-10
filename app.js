const express = require("express");
const logger = require('morgan')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

const {connect} = require('./db/connect')

const indexRouter = require('./routes/index')

app.use('/escuderia', indexRouter)

connect()

module.exports = app
