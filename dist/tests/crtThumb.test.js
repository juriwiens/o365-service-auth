"use strict";
const ava_1 = require('ava');
const crtThumb = require('../src/crtThumb');
const keys_1 = require('./keys');
ava_1.test('return a thumbprint for a X.509 certificate in DER format', t => {
    t.is(crtThumb.sha1Thumb(keys_1.certificate.derBuffer), 'SZ/fHCIYqZyFlarC/ZXONvCm1Z0=');
});
//# sourceMappingURL=crtThumb.test.js.map