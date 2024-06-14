function solution(array) {
    if (array.length === 0) {
        return [null, -1];
    }

    let maxValue = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
            maxIndex = i;
        }
    }

    return [maxValue, maxIndex];
}

