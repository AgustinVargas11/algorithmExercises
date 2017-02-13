'use strict';

export default function kebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('A string must be passed in');
    } else if (!str.length) {
        throw new Error('Cannot accept empty string');
    }

    const pattern = new RegExp(/([a-z][A-Z])|([a-z][_][a-z])/, 'g');

    return str.replace(pattern, function (match) {
        if (/[a-z][A-Z]/.test(match)) {
            return `${match[0]}-${match[1]}`;
        } else {
            return `${match[0]}-${match[2]}`;
        }
    }).toLowerCase();
}
