import * as qs from 'querystring'
import 'isomorphic-fetch'
import { createProvideJWTFn, JWT } from './requestJWT'
import { sha1Thumb } from './crtThumb'

export type ProvideTokenFn = () => Promise<AccessToken>
type ProvideJWTFn = () => JWT
type Seconds = number

export interface TokenEndpointConf {
  url: string
  httpMethod: string
}

export interface AccessToken {
  token_type: string
  expires_in: string
  scope: string
  expires_on: string
  not_before: string
  resource: string
  access_token: string
}

/**
 * Builds the body for the AccessToken request, using the client_credentials.
 * Returns an x-www-form-urlencoded request body.
 */
function makeRequestBody(clientID: string, requestJWT: JWT): string {
  return qs.stringify({
    grant_type: 'client_credentials',
    client_id: clientID,
    resource: 'https://outlook.office365.com',
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    client_assertion: requestJWT
  })
}

function requestAccessToken(provideJWT: ProvideJWTFn, clientID: string,
                            endpointConf: TokenEndpointConf)
                            : Promise<AccessToken> {
  return fetch(endpointConf.url, {
    method: endpointConf.httpMethod,
    body: makeRequestBody(clientID, provideJWT())
  }).then(res => res.json())
}

function isAccessTokenExpired(token: AccessToken, safetyBuffer: Seconds): boolean {
  console.log('typeof token.expires_on: ', typeof token.expires_on)
  return Math.floor(Date.now() / 1000) >=
    (parseInt(token.expires_on, 10) - safetyBuffer)
}

export function createProvideTokenFn(clientID: string, derCertificate: Buffer,
                                     privateKey: Buffer,
                                     endpointConf: TokenEndpointConf)
                                     : ProvideTokenFn {
  const certThumbprint = sha1Thumb(derCertificate)
  const provideJWT = createProvideJWTFn(clientID, endpointConf.url,
    certThumbprint, privateKey)
  let lastAccessToken: AccessToken
  return () => lastAccessToken && !isAccessTokenExpired(lastAccessToken, 10) ?
    Promise.resolve(lastAccessToken) :
    requestAccessToken(provideJWT, clientID, endpointConf)
      .then(token => lastAccessToken = token)
}
