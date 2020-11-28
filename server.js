/* eslint-disable */

const express = require("express")
const bodyParser = require("body-parser")
// const cors = require('cors')

const app = express()
app.use(bodyParser.json())
// app.use(cors())

// Initialize the app.
require('./app/spotifyRoutes')(app)
const server = app.listen(process.env.PORT || 8197, function () {
  const port = server.address().port
  console.log("App now running on port", port)
})
