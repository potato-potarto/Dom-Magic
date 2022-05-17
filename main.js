
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    let number1 = a + b + b + 90;
    let number2 = number1 / 10;
    if (number2 % 5 === 0){
        number3 = number2 - 8;
    }
    else {
        number4 = number2 +9;
    }

let number5 = number4 * number4;
let G = number5 / 3;

return roundUp(G);
}