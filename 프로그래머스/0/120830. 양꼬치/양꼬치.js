function solution(n, k) {
    const pricePerSkewer = 12000;
    const pricePerDrink = 2000;
    const freeDrink = Math.floor(n / 10);
    const calculationDrink = k - freeDrink;
    const totalPrice = (n * pricePerSkewer) + (pricePerDrink * calculationDrink);
    
    return totalPrice;
}