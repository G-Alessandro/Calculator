const body = document.querySelector("body");
const display = document.getElementById("display");
const btnBackspace = document.getElementById("btnBackspace");
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
const btnPercentage = document.getElementById("btnPercentage");
const btnAdd = document.getElementById("btnAdd");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
let btnClicked = [];
let numToUse = [];
let numToOperate = [];
let operateResult = [];
let operateSingleNumber = [];

function operateSingleNumberEmpty () {
    if ( operateSingleNumber.length === 2 ) {
        operateSingleNumber = [];
    };
};

function noOperatorsClicked () {
    let firstNumToUse = numToUse[0].toString().length;
    if ( firstNumToUse > 1 ) {
        numToUse.splice( 0, 1 );
    };
};

function backspace () {
    btnClicked = btnClicked.slice( 0, -1 );
    display.innerText = btnClicked.join("");
    numToUse = numToUse.slice( 0, -1 );
};

function clear () {
    btnClicked = [];
    numToUse = [];
    numToOperate = [];
    operateResult = [];
    operateSingleNumber= [];
    display.innerText = btnClicked;
};

function addSingleDot () {
    if ( numToUse.includes(".") === false ) {
        btnClicked.push(".");
        numToUse.push("."); 
    };
};

function typingLimiter () {
    display.innerText = btnClicked.slice( 0, 12 ).join("");
    btnClicked.splice( 12 );
    numToUse.splice( 12 );
};


function doubleZeroError () {
    if ( isNaN(operateResult) ) {
        operateResult = [];
        operateResult.push("AHAHAH, no!");
    };
};

function longResult () {
    let toStringRes = operateResult[0].toString();
    let lengthRes = toStringRes.length;
    if ( lengthRes > 12 && operateResult[0] != "AHAHAH, no!" ) {
        let exponentsOfTen = 0;
        let firstNum = toStringRes.slice( 0, 1 );
        if ( toStringRes.includes(".") ) {
            firstNum = toStringRes.slice( 0, 3 );
            if ( firstNum.slice( -1 ) === "." ) {
                firstNum = firstNum.slice( 0, -1 );
            };
            for ( ; lengthRes > 3 ; lengthRes--) {
                exponentsOfTen++;
            };
            display.innerText = firstNum + "e-" + exponentsOfTen;
        };
        if ( toStringRes.includes(".") === false ) {
            for ( ; lengthRes > 1 ; lengthRes--) {
                exponentsOfTen++;
            };
            display.innerText = firstNum + "e+" + exponentsOfTen;
        }
    };
    if ( toStringRes.includes(".") ) {
        let afterDotResult = toStringRes.indexOf( "." ) + 4;
        let firstThreeNum = toStringRes.slice( 0, afterDotResult );
        display.innerText = firstThreeNum;
    };
};

function pushInNumToOperate () {
    let numToUseJoin = numToUse.join("");
    btnClicked = [];
    if ( numToUse.length === 1  && operateResult.length === 1 ) {
        display.innerText = operateResult;
    }
    numToOperate.push(+numToUseJoin);
    numToUse = [];
    if ( numToOperate.length >= 3 ) {
        operate ();
        numToOperate.push(+numToUse);
        numToUse = [];
    };
}

function percentage () {
    let numToUseJoin = numToUse.join("");
    btnClicked = [];
    numToOperate.push(+numToUseJoin);
    numToUse = [];
    if ( numToOperate.length === 3 && numToOperate.includes("%")) {
        numToOperate.splice( 0, 3, + ( numToOperate[2] / 100 * numToOperate[0] ));
    };
    if ( numToOperate.length === 3 ) {
        numToOperate.splice( 2, 2, +( numToOperate[0] / 100 * numToOperate[2] ));
        operate ();
    };
};

function operate () {
    if ( numToOperate.length >= 3 ) {
        for ( let i = numToOperate.length / 3 ; i > 0 ; i-- ) {
            let cutPart = numToOperate.slice( 0, 3);
            let result = 0;        
            
            if ( cutPart.includes("+") ) {
                result = cutPart[0] + cutPart[2];
            };
            if ( cutPart.includes("-") ) {
                result = cutPart[0] - cutPart[2];
            };
            if ( cutPart.includes("*") ) {
                result = cutPart[0] * cutPart[2];
            };
            if ( cutPart.includes("/") ) {
                result = cutPart[0] / cutPart[2];
            };
            numToOperate.splice( 0, 3, +result );
        }
    };
    operateResult.splice( 0, 12, +numToOperate[0] );
    doubleZeroError ();
    display.innerText = operateResult;
    longResult ();
    numToUse.push(+numToOperate[0]);
    numToOperate = [];
}

btnBackspace.addEventListener('click', function () {
    backspace ();
});

btnClear.addEventListener('click', function () {
    clear ();
});

btn1.addEventListener('click', function () {
    btnClicked.push(1);
    numToUse.push(1);
    noOperatorsClicked ();
    typingLimiter ();
    
    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn2.addEventListener('click', function () {
    btnClicked.push(2);
    numToUse.push(2);
    noOperatorsClicked ();
    typingLimiter ();
    
    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
    console.log( operateSingleNumber,"operateSingleNumber 5" )
});

btn3.addEventListener('click', function () {
    btnClicked.push(3);
    numToUse.push(3);
    noOperatorsClicked ();
    typingLimiter ();
    
    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn4.addEventListener('click', function () {
    btnClicked.push(4);
    numToUse.push(4);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn5.addEventListener('click', function () {
    btnClicked.push(5);
    numToUse.push(5);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn6.addEventListener('click', function () {
    btnClicked.push(6);
    numToUse.push(6);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
    console.log( operateSingleNumber,"operateSingleNumber 5" )
});

btn7.addEventListener('click', function () {
    btnClicked.push(7);
    numToUse.push(7);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn8.addEventListener('click', function () {
    btnClicked.push(8);
    numToUse.push(8);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn9.addEventListener('click', function () {
    btnClicked.push(9);
    numToUse.push(9);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btn0.addEventListener('click', function () {
    btnClicked.push(0);
    numToUse.push(0);
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnDot.addEventListener('click', function () {
    addSingleDot ();
    noOperatorsClicked ();
    typingLimiter ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnEqual.addEventListener('click', function () {
    if ( numToOperate.includes("%") ) {
        percentage ()
    };

    //Operation with a single number
    if ( numToOperate.length === 2 && numToUse.length === 0) {
        operateSingleNumber.push( numToOperate[0], numToOperate[1] );
        if ( operateSingleNumber.length === 4 ) {
            operateSingleNumber.splice( 2, 2 );
        };
        numToOperate.push( operateSingleNumber[0], operateSingleNumber[1] );
    };
    if ( numToUse.length === 1 && numToOperate.length === 2 ) {
        operateSingleNumber.push( numToUse[0], numToOperate[1] )
    };
    if ( numToOperate.length === 0 ) {
        numToOperate.push( operateSingleNumber[0], operateSingleNumber[1] );
    };

    pushInNumToOperate ();
    operate ();

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
    console.log( operateSingleNumber,"operateSingleNumber 5" )
});

btnPercentage.addEventListener('click', function () {
    typingLimiter ();
    percentage ();
    numToOperate.push("%");
    if ( numToOperate.length === 1 && numToOperate.includes( "%" ) ) {
        numToOperate.splice( 0, 1 );
    };

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnAdd.addEventListener('click', function () {
    operateSingleNumberEmpty ();
    typingLimiter ();
    pushInNumToOperate ();
    numToOperate.push("+");

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
    console.log( operateSingleNumber,"operateSingleNumber 5" )
});

btnSubtract.addEventListener('click', function () {
    operateSingleNumberEmpty ();
    typingLimiter ();
    pushInNumToOperate ();
    numToOperate.push("-");

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnMultiply.addEventListener('click', function () {
    operateSingleNumberEmpty ();
    typingLimiter ();
    pushInNumToOperate ();
    numToOperate.push("*");

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

btnDivide.addEventListener('click', function () {
    operateSingleNumberEmpty ();
    typingLimiter ();
    pushInNumToOperate ();
    numToOperate.push("/");

    console.log(btnClicked,"btnClicked 1")
    console.log(numToUse,"numToUse 2")
    console.log(numToOperate, "numToOperate 3");
    console.log( operateResult, "operateResult 4" )
});

function operatorFocus (btn) {
    if ( btnPercentage.classList.contains("focused") === true ) {
        btnPercentage.classList.remove("focused");
    }
    if ( btnAdd.classList.contains("focused") === true ) {
        btnAdd.classList.remove("focused");
    }
    if ( btnSubtract.classList.contains("focused") === true ) {
        btnSubtract.classList.remove("focused");
    }
    if ( btnMultiply.classList.contains("focused") === true ) {
        btnMultiply.classList.remove("focused");
    }
    if ( btnDivide.classList.contains("focused") === true ) {
        btnDivide.classList.remove("focused");
    }
    btn.classList.add("focused");
};

function removeOperatorFocus () {
    if ( btnPercentage.classList.contains("focused") === true ) {
        btnPercentage.classList.remove("focused");
    }
    if ( btnAdd.classList.contains("focused") === true ) {
        btnAdd.classList.remove("focused");
    }
    if ( btnSubtract.classList.contains("focused") === true ) {
        btnSubtract.classList.remove("focused");
    }
    if ( btnMultiply.classList.contains("focused") === true ) {
        btnMultiply.classList.remove("focused");
    }
    if ( btnDivide.classList.contains("focused") === true ) {
        btnDivide.classList.remove("focused");
    }
}

document.addEventListener('keydown', function (event) {
    if ( event.key === "1") {
        btn1.classList.add("clicked");
        setTimeout (function () {
            btn1.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn1.click();
    };
    if ( event.key === "2") {
        btn2.classList.add("clicked");
        setTimeout (function () {
            btn2.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn2.click();
    };
    if ( event.key === "3") {
        btn3.classList.add("clicked");
        setTimeout (function () {
            btn3.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn3.click();
    };
    if ( event.key === "4") {
        btn4.classList.add("clicked");
        setTimeout (function () {
            btn4.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn4.click();
    };
    if ( event.key === "5") {
        btn5.classList.add("clicked");
        setTimeout (function () {
            btn5.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn5.click();
    };
    if ( event.key === "6") {
        btn6.classList.add("clicked");
        setTimeout (function () {
            btn6.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn6.click();
    };
    if ( event.key === "7") {
        btn7.classList.add("clicked");
        setTimeout (function () {
            btn7.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn7.click();
    };
    if ( event.key === "8") {
        btn8.classList.add("clicked");
        setTimeout (function () {
            btn8.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn8.click();
    };
    if ( event.key === "9") {
        btn9.classList.add("clicked");
        setTimeout (function () {
            btn9.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn9.click();
    };
    if ( event.key === "0") {
        btn0.classList.add("clicked");
        setTimeout (function () {
            btn0.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btn0.click();
    };
    if ( event.key === ".") {
        btnDot.classList.add("clicked");
        setTimeout (function () {
            btnDot.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btnDot.click();
    };
    if ( event.key === "Enter") {
        btnEqual.classList.add("clicked");
        setTimeout (function () {
            btnEqual.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btnEqual.click();
    };
    if ( event.key === "%") {
        btnPercentage.classList.add("clicked");
        setTimeout (function () {
            btnPercentage.classList.remove("clicked");
        }, 50);
        operatorFocus (btnPercentage);
        btnPercentage.click();
    };
    if ( event.key === "+") {
        btnAdd.classList.add("clicked");
        setTimeout (function () {
            btnAdd.classList.remove("clicked");
        }, 50);
        operatorFocus (btnAdd);
        btnAdd.click();
    };
    if ( event.key === "-") {
        btnSubtract.classList.add("clicked");
        setTimeout (function () {
            btnSubtract.classList.remove("clicked");
        }, 50);
        operatorFocus (btnSubtract);
        btnSubtract.click();
    };
    if ( event.key === "*") {
        btnMultiply.classList.add("clicked");
        setTimeout (function () {
            btnMultiply.classList.remove("clicked");
        }, 50);
        operatorFocus (btnMultiply);
        btnMultiply.click();
    };
    if ( event.key === "/") {
        btnDivide.classList.add("clicked");
        setTimeout (function () {
            btnDivide.classList.remove("clicked");
        }, 50);
        operatorFocus (btnDivide);
        btnDivide.click();
    };
    if ( event.key === "Backspace") {
        btnBackspace.classList.add("clicked");
        setTimeout (function () {
            btnBackspace.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btnBackspace.click();
    };
    if ( event.key === "Delete") {
        btnClear.classList.add("clicked");
        setTimeout (function () {
            btnClear.classList.remove("clicked");
        }, 50);
        removeOperatorFocus ();
        btnClear.click();
    };
});