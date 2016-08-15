import { test } from 'ava'
import { createProvideJWTFn, JWT } from '../src/requestJWT'
import { privateKey } from './keys'

test('createProvideJWTFn should create a function that returns a new JWT on every call', t => {
  const provideJWT = createProvideJWTFn('mockClientID', 'mockTokenEndpointURL',
    'mockThumbprint', privateKey.pemBuffer)
  t.true(typeof provideJWT() === 'string')
})
