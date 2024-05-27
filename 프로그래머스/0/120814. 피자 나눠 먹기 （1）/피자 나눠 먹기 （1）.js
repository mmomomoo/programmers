function solution(n) {
    const piecesPerPizza = 7;
    const pizzasNeeded = Math.ceil(n / piecesPerPizza);  
    
    return pizzasNeeded;
}