'use strict';

export default function mergeSort(arr) {
  const len = arr.length;

  if (len < 2) return arr;

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  const result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  while (arr1.length)
    result.push(arr1.shift());

  while (arr2.length)
    result.push(arr2.shift());

  return result;
}
