function solution(box, n) {
    const countOfDicePerLength = box.map(num => Math.trunc(num / n));
    const maxDice = countOfDicePerLength[0] * countOfDicePerLength[1] * countOfDicePerLength[2];
    return maxDice;
}