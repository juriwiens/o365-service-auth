import * as crypto from 'crypto'
import * as fs from 'fs'

/** Calculates the SHA1 Thumbprint for a certificate in DER format. */
export function sha1Thumb(certDerBuffer: Buffer): string {
  return crypto.createHash('sha1')
               .update(certDerBuffer)
               .digest('base64')
}