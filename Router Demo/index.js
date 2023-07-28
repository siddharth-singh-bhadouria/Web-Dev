const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')


app.use('shelters', shelterRoutes)