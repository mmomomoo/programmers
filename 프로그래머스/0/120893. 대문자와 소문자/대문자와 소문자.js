const solution = my_string => {
    let newstring = '';
    for(i = 0; i < my_string.length; i++){
    if(my_string[i] === my_string[i].toUpperCase()){
        newstring += my_string[i].toLowerCase();
    } else if (my_string[i] === my_string[i].toLowerCase()) {
        newstring += my_string[i].toUpperCase();
    }
  }
    return newstring;
}