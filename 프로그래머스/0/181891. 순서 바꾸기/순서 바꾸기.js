function solution(num_list, n) {
    let Previous = num_list.slice(n);
    let After = num_list.slice(0, n);
    
    return Previous.concat(After);
  
}