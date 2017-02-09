'use strict';

export default function factorial(num) {
    if (!num || num <= 0) return 0;

    if (isNaN(num)) throw new TypeError(`Can\'t get the factorial of ${typeof num}s`);

    function fact(num) {
        if (num === 1) return 1;
        return factorial(num - 1) * num;
    }

    return fact(num);
}
