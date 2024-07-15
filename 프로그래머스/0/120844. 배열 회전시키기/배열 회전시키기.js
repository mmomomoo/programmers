function solution(numbers, direction) {
    if (direction === 'left') {
        let firstElement = numbers.shift(); 
        numbers.push(firstElement);
    } else if (direction === 'right') {
        let lastElement = numbers.pop(); 
        numbers.unshift(lastElement);
    }
    return numbers;
}
