"use strict";
const ava_1 = require('ava');
const core_1 = require('../src/core');
const keys_1 = require('./keys');
const nock = require('nock');
const uuid = require('node-uuid');
function createMockAccessToken() {
    const now = Math.floor(Date.now() / 1000);
    return {
        token_type: 'Bearer',
        expires_in: '3600',
        scope: 'Contacts.Read',
        expires_on: (now + 3600).toString(),
        not_before: now.toString(),
        resource: 'https://outlook.office365.com',
        access_token: uuid.v4()
    };
}
ava_1.test('createProvideTokenFn() should return a function that returns an AccessToken Promise', t => {
    const endpointConf = {
        url: 'http://endpoint.mock',
        httpMethod: 'POST'
    };
    const expectedAccessToken = createMockAccessToken();
    nock.disableNetConnect();
    nock(endpointConf.url)
        .intercept('/', endpointConf.httpMethod)
        .reply(200, expectedAccessToken);
    const provideToken = core_1.createProvideTokenFn('mockClientID', keys_1.certificate.derBuffer, keys_1.privateKey.pemBuffer, endpointConf);
    return provideToken().then(res => t.deepEqual(res, expectedAccessToken));
});
ava_1.test('createProvideTokenFn() should return a function that caches AccessTokens until they expire', t => {
    const endpointConf = {
        url: 'http://endpoint.mock',
        httpMethod: 'POST'
    };
    nock.disableNetConnect();
    nock(endpointConf.url)
        .intercept('/', endpointConf.httpMethod)
        .times(2)
        .reply(200, createMockAccessToken);
    const provideToken = core_1.createProvideTokenFn('mockClientID', keys_1.certificate.derBuffer, keys_1.privateKey.pemBuffer, endpointConf);
    let token1;
    return provideToken()
        .then(token => {
        token1 = token;
        return provideToken();
    })
        .then(token => t.deepEqual(token, token1));
});
//# sourceMappingURL=core.test.js.map