'use strict';

export default function kebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('A string must be passed in');
    } else if (!str.length) {
        throw new Error('Cannot accept empty string');
    }
    const pattern = new RegExp(/(\s|_|[a-z][A-Z])/, 'g')
    return str.replace(pattern, match => /[a-z][A-Z]/g.test(match) ? `${match[0]}-${match[1]}` : '-').toLowerCase();
}
