import { test } from 'ava'
import { createProvideTokenFn, AccessToken, TokenEndpointConf } from '../src/core'
import { privateKey, certificate } from './keys'
import * as nock from 'nock'
import * as uuid from 'node-uuid'

function createMockAccessToken(): AccessToken {
  const now = Math.floor(Date.now() / 1000)
  return {
    token_type: 'Bearer',
    expires_in: '3600',
    scope: 'Contacts.Read',
    expires_on: (now + 3600).toString(),
    not_before: now.toString(),
    resource: 'https://outlook.office365.com',
    access_token: uuid.v4() // insert uuid to make it unique
  }
}

test('createProvideTokenFn() should return a function that returns an AccessToken Promise', t => {
  const endpointConf: TokenEndpointConf = {
    url: 'http://endpoint.mock',
    httpMethod: 'POST'
  }
  const expectedAccessToken = createMockAccessToken()

  // Mock token endpoint request and disable all other connections
  nock.disableNetConnect()
  nock(endpointConf.url)
    .intercept('/', endpointConf.httpMethod)
    .reply(200, expectedAccessToken)

  const provideToken = createProvideTokenFn('mockClientID', certificate.derBuffer,
    privateKey.pemBuffer, endpointConf)
  return provideToken().then(res => t.deepEqual(res, expectedAccessToken))
})

test('createProvideTokenFn() should return a function that caches AccessTokens until they expire', t => {
  const endpointConf: TokenEndpointConf = {
    url: 'http://endpoint.mock',
    httpMethod: 'POST'
  }

  // Mock token endpoint request and disable all other connections
  nock.disableNetConnect()
  nock(endpointConf.url)
    .intercept('/', endpointConf.httpMethod)
    .times(2)
    .reply(200, createMockAccessToken)

  const provideToken = createProvideTokenFn('mockClientID', certificate.derBuffer,
    privateKey.pemBuffer, endpointConf)
  let token1: AccessToken
  return provideToken()
    .then(token => {
      token1 = token
      return provideToken()
    })
    .then(token => t.deepEqual(token, token1))
})
