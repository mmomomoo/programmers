function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    
    const positiveProduct = sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2]
    const negativeProduct = sortedNumbers[0] * sortedNumbers[1]
    return Math.max(positiveProduct, negativeProduct);
}