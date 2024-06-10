const solution = (angle) => {
    return (0 < angle && angle < 90) ? 1 :
           (angle === 90)? 2:
           (90 < angle && angle < 180)? 3: 
           (angle === 180 )? 4 : 0;
}

//0은 예외처리로 