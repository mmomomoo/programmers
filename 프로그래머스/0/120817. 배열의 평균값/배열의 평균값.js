let sum = 0;
const solution = (numbers) => {
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
};
