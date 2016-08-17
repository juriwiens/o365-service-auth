"use strict";
const ava_1 = require('ava');
const requestJWT_1 = require('../src/requestJWT');
const keys_1 = require('./keys');
ava_1.test('createProvideJWTFn() should create a function that returns a new JWT on every call', t => {
    const provideJWT = requestJWT_1.createProvideJWTFn('mockClientID', 'mockTokenEndpointURL', 'mockThumbprint', keys_1.privateKey.pemBuffer);
    t.true(typeof provideJWT() === 'string');
});
//# sourceMappingURL=requestJWT.test.js.map