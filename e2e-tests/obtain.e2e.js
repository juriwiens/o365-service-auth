const test = require('ava')
const { obtainAccessToken } = require('../')
const fs = require('fs')

const confPath = './e2e-conf.json'

test('should export obtainAccessToken', t => {
  t.true(typeof obtainAccessToken === 'function')
})

test('should return an AccessToken', t => {
  const conf = require(confPath)
  const privateKey = fs.readFileSync(__dirname + '/' + conf.privateKeyFile)
  const derCert = fs.readFileSync(__dirname + '/' + conf.derCertificateFile)

  return obtainAccessToken(conf.clientID, derCert, privateKey)
    .then(token => console.log('Received access token:', token))
})
