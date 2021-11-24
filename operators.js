"use strict";
// задание 1
function homeWork1() {
    //пример 1 
    let a = 1,
        b = 1,
        c, d;
    c = ++a; // ++a увеличется на 2, а потом присвоится
    console.log(' c = ' + c); // ответ: 2 

    //пример 2 
    d = b++; // b сперва привоится, а потом увеличит свое значение на 2
    console.log(' d = ' + d); //ответ: 1 

    //пример 3 
    c = 2 + ++a; // ++a сперва увеличится на 3 с двойки потом: с=2+3=5
    console.log(' c = ' + c); //ответ: 5 

    //пример 4 
    d = 2 + b++; // порядок действий: d = 2 + b++, d = 2 + 2, d = 4, b++ = 3
    console.log(' d = ' + d); //ответ: 4 

    console.log(' a = ' + a); //3 
    console.log(' b = ' + b); //3 
    return("a = " + a + ", b = " + b + ", c = " + c + ", d = " + d);

}
console.log(homeWork1());

// задание 2
function homeWork2() {
    let a = 2;
    let x = 1 + (a *= 2); //Здесь (a *= 2) будет ровнятся (a = a * 2), так как a * 2 равно 4 и оно присвоится в а, после 4 + 1 в x
    return x;
}
console.log(homeWork2());

// задание 3
function homeWork3() {
    let a = +prompt("Enter a number1 more or less than 0!");
    let b = +prompt("Enter a number2 more or less than 0!");
    let abValue = ("a = " + a + "\nb = " + b + "\n");
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter number!");
        homeWork3();
    } else if (a >= 0 && b >= a) {
        alert(abValue + "b - a = " + (b - a));
    } else if (a > 0 && b > 0) {
        alert(abValue + "a - b = " + (a - b));
    } else if (a < 0 && b < 0) {
        alert(abValue + "a * b = " + (a * b));
    } else{
        alert(abValue + "a + b = " + (a + b));
    }
}
homeWork3();

// задание 4 и 5
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

function multiply(a, b) {
    return a * b
}

function devide(a, b) {
    if (a > b) {
        return a / b;
    } else {
        return b / a;
    }

}

function enterNumber() {
    let parFirst = +prompt("Enter a number1");
    let parSecond = +prompt("Enter a number2");
    let operations = prompt("Enter one of this operations '+' '-' '*' '/'");
    if (isNaN(parFirst) || isNaN(parSecond)) {
        enterNumber();
    } else {
        mathOperation(parFirst, parSecond, operations);
    }
}

function mathOperation(parFirst, parSecond, operations) {
    switch (operations) {
        case "+":
            console.log(add(parFirst, parSecond));
            break;
        case "-":
            console.log(subtract(parFirst, parSecond));
            break;
        case "*":
            console.log(multiply(parFirst, parSecond));
            break;
        case "/":
            console.log(devide(parFirst, parSecond));
            break;
        default:
            enterNumber();
    }
}
enterNumber();