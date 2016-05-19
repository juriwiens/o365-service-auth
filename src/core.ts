import * as qs from 'querystring'
import 'isomorphic-fetch'
import * as jwt from 'jsonwebtoken'
import * as reqJWT from './requestJWT'
import { sha1Thumb } from './crtThumb'

type JWT = reqJWT.JWT

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

const defaultEndpointConf: TokenEndpointConf = {
  url: 'https://login.microsoftonline.com/keskinfensterbau.de/oauth2/token',
  httpMethod: 'POST'
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

function requestAccessToken(jwt: JWT, clientID: string,
                            endpointConf: TokenEndpointConf)
                            : Promise<AccessToken> {
  return fetch(endpointConf.url, {
    method: endpointConf.httpMethod,
    body: makeRequestBody(clientID, jwt)
  }).then(res => res.json())
}

export function obtainAccessToken(clientID: string, derCertificate: Buffer,
                                  privateKey: Buffer,
                                  endpointConf = defaultEndpointConf)
                                  : Promise<AccessToken> {
  const certThumbprint = sha1Thumb(derCertificate)
  const jwt = reqJWT.make(clientID, endpointConf.url, certThumbprint, privateKey)
  return requestAccessToken(jwt, clientID, endpointConf)
}
