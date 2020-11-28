'use strict'
const spotify = require('./services/spotify')

async function list(req, res) {
  try {
    res.status(200).json({ 'Hello': 'World' })
  } catch (e) {
    console.error('Error occurred querying Spotify', e)
    res.status(500).json(response(500, 'Internal server error'))
  }
}

async function get(req, res) {
  try {
    const path = req.params[0]
    if (!path) {
      res.status(400).message('Path is required')
    }

    const getResponse = await spotify.get(path)
    res.status(200).json(getResponse)
  } catch (e) {
    console.error('Error occurred querying Spotify', e)
    res.status(500).json(response(500, 'Internal server error'))
  }
}

async function me(req, res) {
  try {
    const me = await spotify.me()
    res.status(200).json(me)
  } catch (e) {
    console.error('Error occurred querying Spotify', e)
    res.status(500).json(response(500, 'Internal server error'))
  }
}

function response(code, message) {
  return {
    statusCode: code,
    message: message
  }
}

module.exports = {
  list,
  get,
  me
}
