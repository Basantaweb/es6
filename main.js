/* main js */

let fristfun = function () {
    console.log("This is my first function");
}

let secondFun = function () {
    console.log("This is my second function");
    fristfun();
}

secondFun();