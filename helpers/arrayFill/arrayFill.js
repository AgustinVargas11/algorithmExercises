import randomNo from '../randomNo/randomNo';

(function () {
  'use strict';

  const arrProto = Array.prototype;

  arrProto.arrayFill = function (num, random = false) {
    if (!num || num < 0 || isNaN(num)) {
      throw new Error('first parameter must be a positive number');
    }

    for (let i = 0, n = this.length; i < n; i++) {
      if (random) this[i] = randomNo();
      else this[i] = i;
    }
  }

})();