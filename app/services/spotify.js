const got = require('got')
const baseUrl = 'https://api.spotify.com/v1'

let access_token = ''
// let refresh_token = ''

function setAccessToken(value) {
  access_token = value
}

async function me() {
  if (!access_token || access_token === '') {
    throw new Error('No access token')
  }

  const meResponse = await got('https://api.spotify.com/v1/me', {
    headers: { 'Authorization': 'Bearer ' + access_token }
  })
  return JSON.parse(meResponse.body)
}

async function get(path) {
  if (!access_token || access_token === '') {
    throw new Error('No access token')
  }

  const getResponse = await got(`${baseUrl}/${path}`, {
    headers: { 'Authorization': 'Bearer ' + access_token }
  })
  return JSON.parse(getResponse.body)
}

module.exports = {
  setAccessToken,
  me,
  get
}