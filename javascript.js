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

// console.log(add(4,5,7,8,))

// console.log(subtract(4,5,7,8,))

// console.log(multiply(2,4,8,2,5))

// console.log(divide(50,2,2,2))