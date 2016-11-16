"use strict";
const qs = require('querystring');
require('isomorphic-fetch');
const requestJWT_1 = require('./requestJWT');
const crtThumb_1 = require('./crtThumb');
const makeDebug = require('debug');
const debug = makeDebug('o365-service-auth');
function makeRequestBody(clientID, requestJWT) {
    return qs.stringify({
        grant_type: 'client_credentials',
        client_id: clientID,
        resource: 'https://outlook.office365.com',
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_assertion: requestJWT
    });
}
function requestAccessToken(provideJWT, clientID, endpointConf) {
    const body = makeRequestBody(clientID, provideJWT());
    debug('request body', body);
    return fetch(endpointConf.url, {
        method: endpointConf.httpMethod,
        body
    }).then(res => res.json());
}
function isAccessTokenExpired(token, safetyBuffer) {
    return Math.floor(Date.now() / 1000) >=
        (parseInt(token.expires_on, 10) - safetyBuffer);
}
function createProvideTokenFn(clientID, derCertificate, privateKey, endpointConf) {
    const certThumbprint = crtThumb_1.sha1Thumb(derCertificate);
    const provideJWT = requestJWT_1.createProvideJWTFn(clientID, endpointConf.url, certThumbprint, privateKey);
    let lastAccessToken;
    return () => lastAccessToken && !isAccessTokenExpired(lastAccessToken, 10) ?
        Promise.resolve(lastAccessToken) :
        requestAccessToken(provideJWT, clientID, endpointConf)
            .then(token => lastAccessToken = token);
}
exports.createProvideTokenFn = createProvideTokenFn;
//# sourceMappingURL=core.js.map