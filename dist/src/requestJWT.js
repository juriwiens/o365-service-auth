"use strict";
const jwt = require('jsonwebtoken');
function createProvideJWTFn(clientID, tokenEndpointURL, certThumbprint, privateKey) {
    const claims = {};
    const signOpts = {
        algorithm: 'RS256',
        header: { 'x5t': certThumbprint },
        audience: tokenEndpointURL,
        issuer: clientID,
        subject: clientID,
        expiresIn: 60
    };
    return () => jwt.sign(claims, privateKey, signOpts);
}
exports.createProvideJWTFn = createProvideJWTFn;
//# sourceMappingURL=requestJWT.js.map