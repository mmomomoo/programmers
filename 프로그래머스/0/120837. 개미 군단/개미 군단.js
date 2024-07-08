function solution(hp) {
   const generalAnt = Math.floor(hp / 5);
    hp = hp % 5;
   const soldierAnt = Math.floor(hp / 3);
    hp = hp % 3;
   const privateAnts = Math.floor(hp / 1);
    hp = hp % 1;
    
    const totalAnt = generalAnt + soldierAnt + privateAnts;
    return totalAnt;
}