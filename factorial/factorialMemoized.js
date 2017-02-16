'use strict';

export default function factorial(num) {
    if (!num || num <= 0) return 0;

    if (isNaN(num)) throw new TypeError(`Can\'t get the factorial of ${typeof num}s`);

    const memo = {};

    function fact(num) {
        if (num === 1) return 1;

        if (memo.hasOwnProperty(num)) {
            return memo[num];
        } else {
            memo[num] = factorial(num - 1) * num
        }

        return memo[num];
    }

    return fact(num);
}