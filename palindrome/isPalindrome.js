'use strict';

export default function isPalindrome(str) {
    if (typeof str !== 'string' || !str) throw new TypeError('a string must be passed in');
    if (str.length === 1) return true;

    str = str.replace(/[\d\W]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}