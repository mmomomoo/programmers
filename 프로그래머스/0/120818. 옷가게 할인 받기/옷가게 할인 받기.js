function solution(price) {
    let cost = 0;
    if(price >= 500000){
        cost +=  Math.floor(price * 0.8) 
    } else if (price >= 300000) {
       cost +=  Math.floor(price * 0.9)
    } else if (price >= 100000) {
       cost += Math.floor(price * 0.95)
    } else if (price < 100000) {
       cost += price; 
    }
    return cost;
}



