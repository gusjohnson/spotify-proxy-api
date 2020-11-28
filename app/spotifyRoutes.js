'use strict'
const controller = require('./spotifyController.js')

module.exports = function(app) {  
  app.get('/spotify', async function(req, res) {
    await controller.list(req, res)
  })

  app.get('/spotify/me', async function(req, res) {
    await controller.me(req, res)
  })

  app.get('/spotify/*', async function(req, res) {
    await controller.get(req, res)
  })
}
