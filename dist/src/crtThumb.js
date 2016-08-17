"use strict";
const crypto = require('crypto');
function sha1Thumb(certDerBuffer) {
    return crypto.createHash('sha1')
        .update(certDerBuffer)
        .digest('base64');
}
exports.sha1Thumb = sha1Thumb;
//# sourceMappingURL=crtThumb.js.map