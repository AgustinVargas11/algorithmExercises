export default function binarySearch(data, target) {

    if (!Array.isArray(data)) throw new TypeError('Dataset must be of type array');

    if (!data.length || !target || target < 0) return -1;

    let low = 0,
        high = data.length - 1,
        mid, guess;

    while (low <= high) {

        mid = Math.floor((low + high) / 2);
        guess = data[mid];

        if (guess === target) {
            return mid;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;

}
