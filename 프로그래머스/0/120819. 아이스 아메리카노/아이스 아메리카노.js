function solution(money) {
    let result = [];
    const oneCup = 5500;
    const maxCup = Math.trunc(money/oneCup);
    const Change =  money - maxCup * oneCup;
    
    result.push(maxCup);
    result.push(Change);
    return result;
}