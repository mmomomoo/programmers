function solution(price) {
    let discount = (price >= 500000) ?  0.2 :
                   (price >= 300000) ?  0.1 :
                   (price >= 100000) ?  0.05 :
                   0;
    
    let finalPrice = price * (1 - discount);
    return Math.floor(finalPrice);
    
}