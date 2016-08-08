const test = require('ava')
const { createProvideTokenFn } = require('../')
const fs = require('fs')

const confPath = '../.private/e2e-conf.json'

test('should return an AccessToken', t => {
  const conf = require(confPath)
  const privateKey = fs.readFileSync(__dirname + '/' + conf.privateKeyFile)
  const derCert = fs.readFileSync(__dirname + '/' + conf.derCertificateFile)
  const tokenEndpointConf = {
    url: 'https://login.microsoftonline.com/keskinfensterbau.de/oauth2/token',
    httpMethod: 'POST'
  }

  const provideToken = createProvideTokenFn(conf.clientID, derCert, privateKey, tokenEndpointConf)
    
  return provideToken().then(token => console.log('Received access token:', token))
})
