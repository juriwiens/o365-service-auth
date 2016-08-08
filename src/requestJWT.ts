import * as jwt from 'jsonwebtoken'

export type JWT = string

export function make(clientID: string, tokenEndpointURL: string,
                     certThumbprint: string, privateKey: Buffer): JWT {
  const claims = {} // We don't need to add any claims
  const signOpts: /*jwt.SignOptions*/ Object = { // Change back to SignOptions type when 'headers' bug is fixed
    algorithm: 'RS256',
    header: { 'x5t': certThumbprint },
    audience: tokenEndpointURL,
    issuer: clientID,
    subject: clientID,
    expiresIn: 60 // JWT has to have an expiration time!
  }
  return jwt.sign(claims, privateKey, signOpts)
}