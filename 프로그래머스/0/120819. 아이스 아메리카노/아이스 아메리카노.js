function solution(money) {
    let price = 5500;
    let maxCoffee = Math.floor( money / price );
    let remainingMoney = money - (maxCoffee * price);
    
    
    return [maxCoffee, remainingMoney];
}