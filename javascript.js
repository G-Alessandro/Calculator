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
let numToUse = [];
let numToOperate = [];
let operateResult = [];

function typingLimiter () {
    display.innerText = btnClicked.slice( 0, 13 ).join("");
    btnClicked.splice( 14 );
    numToUse.splice( 14 );
}

function pushInNumToUse () {
    let numToUseJoin = numToUse.join("")
        btnClicked = [];
        numToOperate.push(+numToUseJoin)
        numToUse = [];
        if ( numToOperate.length >= 3 ) {
            operate ();
            numToOperate.push(+numToUse);
            numToUse = [];
        }
}

function operate () {
    if ( numToOperate.length >= 3 ) {
        for ( let i = numToOperate.length / 3 ; i > 0 ; i-- ) {
            let cutPart = numToOperate.slice( 0, 3);
            let result = 0;
            if ( cutPart.includes("+")) {
                result = cutPart[0] + cutPart[2];
            }
            if ( cutPart.includes("-")) {
                result = cutPart[0] - cutPart[2];
            }
            if ( cutPart.includes("*")) {
                result = cutPart[ 0 ] * cutPart[ 2 ];
            }
            if ( cutPart.includes("/")) {
                result = cutPart[ 0 ] / cutPart[ 2 ];
            }
            numToOperate.splice( 0, 3, +result );
        }
    }
    operateResult.splice( 0, 14, +numToOperate[0] );
    display.innerText = operateResult;
    numToUse.push(+numToOperate[0])
    numToOperate = [];
}

btnClear.addEventListener('click', function (){
    btnClicked = [];
    numToUse = [];
    numToOperate = [];
    display.innerText = btnClicked
});

btn1.addEventListener('click', function () {
    btnClicked.push(1)
    numToUse.push(1)
    typingLimiter ()

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn2.addEventListener('click', function () {
    btnClicked.push(2)
    numToUse.push(2)
    typingLimiter ()

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

// btn3.addEventListener('click', function () {
//     btnClicked.push(3)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("3")
//     console.log(btnClicked)
// });

// btn4.addEventListener('click', function () {
//     btnClicked.push(4)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("4")
//     console.log(btnClicked)
// });

// btn5.addEventListener('click', function () {
//     btnClicked.push(5)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("5")
//     console.log(btnClicked)
// });

// btn6.addEventListener('click', function () {
//     btnClicked.push(6)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("6")
//     console.log(btnClicked)
// });

// btn7.addEventListener('click', function () {
//     btnClicked.push(7)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("7")
//     console.log(btnClicked)
// });

// btn8.addEventListener('click', function () {
//     btnClicked.push(8)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("8")
//     console.log(btnClicked)
// });

// btn9.addEventListener('click', function () {
//     btnClicked.push(9)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("9")
//     console.log(btnClicked)
// });

// btn0.addEventListener('click', function () {
//     btnClicked.push(0)
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log("0")
//     console.log(btnClicked)
// });

// btnDot.addEventListener('click', function () {
//     btnClicked.push(".")
//     removeDoubleOperator ()
//     display.innerText = btnClicked.slice(0, 13).join("")
//     btnClicked.splice(14)
//     console.log(".")
//     console.log(btnClicked)
// });

btnEqual.addEventListener('click', function () {
    pushInNumToUse ()
    operate ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnAdd.addEventListener('click', function () {
    typingLimiter ()
    pushInNumToUse ()
    numToOperate.push("+")

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnSubtract.addEventListener('click', function () {
    typingLimiter ()
    pushInNumToUse ()
    numToOperate.push("-")

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnMultiply.addEventListener('click', function () {
    typingLimiter ()
    pushInNumToUse ()
    numToOperate.push("*")

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnDivide.addEventListener('click', function () {
    typingLimiter ()
    pushInNumToUse ()
    numToOperate.push("/")

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});
