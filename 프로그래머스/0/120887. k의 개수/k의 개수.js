function solution(i, j, k) {
    let kCount = 0;
    const kStr = String(k);
    
    for (let num = i; num <= j; num++){
       const numStr = String(num);
        
        for(let char of numStr){
            if (char === kStr){
                kCount++;
            }
        }
    }
    return kCount;
}