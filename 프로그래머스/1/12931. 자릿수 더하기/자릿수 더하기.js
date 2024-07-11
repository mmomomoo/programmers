const solution = (n) => {
    return n.toString()
            .split('')
            .map(Number)
            .reduce((acc, digit) => acc + digit, 0)
}