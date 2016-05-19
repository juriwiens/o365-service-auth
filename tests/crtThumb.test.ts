import { test } from 'ava'
import * as crtThumb from '../src/crtThumb'
import { certificate } from './keys'

test('return a thumbprint for a X.509 certificate in DER format', t => {
  t.is(crtThumb.sha1Thumb(certificate.derBuffer), 'SZ/fHCIYqZyFlarC/ZXONvCm1Z0=')
})