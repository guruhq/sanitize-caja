var html_sanitize = require('./sanitizer-bundle.js');

module.exports = function(_) {
    if (!_) return '';
    return html_sanitize(_, cleanUrl, cleanId);
};

// https://bugzilla.mozilla.org/show_bug.cgi?id=255107
function cleanUrl(url, effect, ltype, hints, original) {
    'use strict';

    if (!url.getScheme()) return original;
    if (/^https?/.test(url.getScheme())) return original;
    if (/^mailto?/.test(url.getScheme())) return original;
    if (/^tel?/.test(url.getScheme())) return original;
    if ('data' == url.getScheme() && /^image/.test(url.getPath())) {
        return original;
    }
}

function cleanId(id) { return id; }
