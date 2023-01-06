const body = document.querySelector('body');
const display = document.getElementById("display");
const btnClear = document.getElementById("btnClear");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnDot = document.getElementById("btnDot");
const btnEqual = document.getElementById("btnEqual");
const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
let btnClicked = [];

function removeDoubleOperator () {
    if ( btnClicked.at(-2) === '+' ||
     btnClicked.at(-2) === "-" || 
     btnClicked.at(-2) === "x" || 
     btnClicked.at(-2) === ":" || 
     btnClicked.at(-2) === "." ) {
        btnClicked.splice(-1)
    }
}

function add (...args) {
    let result = 0;
    for (let arg of args) result += arg;
    return result
};

function subtract (...args) {
    let result = 0;
    for (let arg of args) result -= arg;
    return result
};

function multiply (...args) {
    const result = args.reduce((result, n) => result * n )
    return result
};

function divide (...args) {
    const result = args.reduce((result, n) => result / n )
    return result
};

function operate () {

};

btnClear.addEventListener('click', function (){
    btnClicked = [];
    display.innerText = btnClicked
});

btn1.addEventListener('click', function () {
    btnClicked.push(1)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("1")
    console.log(btnClicked)
});

btn2.addEventListener('click', function () {
    btnClicked.push(2)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("2")
    console.log(btnClicked)
});

btn3.addEventListener('click', function () {
    btnClicked.push(3)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("3")
    console.log(btnClicked)
});

btn4.addEventListener('click', function () {
    btnClicked.push(4)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("4")
    console.log(btnClicked)
});

btn5.addEventListener('click', function () {
    btnClicked.push(5)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("5")
    console.log(btnClicked)
});

btn6.addEventListener('click', function () {
    btnClicked.push(6)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("6")
    console.log(btnClicked)
});

btn7.addEventListener('click', function () {
    btnClicked.push(7)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("7")
    console.log(btnClicked)
});

btn8.addEventListener('click', function () {
    btnClicked.push(8)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("8")
    console.log(btnClicked)
});

btn9.addEventListener('click', function () {
    btnClicked.push(9)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("9")
    console.log(btnClicked)
});

btn0.addEventListener('click', function () {
    btnClicked.push(0)
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("0")
    console.log(btnClicked)
});

btnDot.addEventListener('click', function () {
    btnClicked.push(".")
    removeDoubleOperator ()
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log(".")
    console.log(btnClicked)
});

btnEqual.addEventListener('click', function () {
    btnClicked.push("=")
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("=")
    console.log(btnClicked)
});

btnAdd.addEventListener('click', function () {
    btnClicked.push("+")
    removeDoubleOperator ()
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("+")
    console.log(btnClicked)
});

btnSubtract.addEventListener('click', function () {
    btnClicked.push("-")
    removeDoubleOperator ()
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("-")
    console.log(btnClicked)
});

btnMultiply.addEventListener('click', function () {
    btnClicked.push("x")
    removeDoubleOperator ()
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log("*")
    console.log(btnClicked)
});

btnDivide.addEventListener('click', function () {
    btnClicked.push(":")
    removeDoubleOperator ()
    display.innerText = btnClicked.slice(0, 13).join("")
    btnClicked.splice(14)
    console.log(":")
    console.log(btnClicked)
});
