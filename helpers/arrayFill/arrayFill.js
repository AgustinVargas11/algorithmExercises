(function () {
    'use strict';

    const arrProto = Array.prototype;

    arrProto.arrayFill = function (num, random = false) {
        if (!num || num < 0 || isNaN(num)) {
            throw new Error('first parameter must be a positive number');
        }

        switch (random) {
            case true:
                for (let i = 0; i < num; i++) {
                    this.push(randomNum(num));
                }
                break;

            default:
                for (let i = 0; i < num; i++) {
                    this.push(i);
                }
        }
    };

    function randomNum(max) {
        return Math.floor(Math.random() * max);
    }

})();