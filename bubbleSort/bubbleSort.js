export default function bubbleSort(data) {

    if (!data.length || data.length === 1) {
        return data;
    }

    var temp;

    for (var i = 0, n = data.length; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (data[j] > data[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return data;
}
