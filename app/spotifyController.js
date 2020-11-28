'use strict'

async function list(req, res) {
  try {
    res.status(200).json({ "Hello": "World" })
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
  list
}
