'use strict'
const controller = require('./spotifyController.js')

module.exports = function(app) {
  app.get('/', (req, res) => res.send('spotify-proxy-api'))

  app.get('/spotify', async function(req, res) {
    await controller.list(req, res)
  })
}
