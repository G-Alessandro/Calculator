function add (...args) {
    let result = 0;
    for (let arg of args) result += arg;
    return result
}

function subtract (...args) {
    let result = 0;
    for (let arg of args) result -= arg;
    return result
}

function multiply (...args) {
    const result = args.reduce((result, n) => result * n )
    return result
}

function divide (...args) {
    const result = args.reduce((result, n) => result / n )
    return result
}