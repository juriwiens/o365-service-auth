import { test } from 'ava'
import * as reqJWT from '../src/requestJWT'
import { privateKey } from './keys'

test('make() should create a request JWT', t => {
  const token = reqJWT.make('mockClientID', 'mockTokenEndpointURL',
                            'mockThumbprint', privateKey.pemBuffer)
  t.true(typeof token === 'string')
})