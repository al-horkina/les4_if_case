const firstNumber = +prompt('enter first number');
const secondNumber = +prompt('enter second number');
let result;

const operation = prompt('Enter operation type');


if(operation === '*') {
    result = firstNumber * secondNumber
} else if(operation === '/') {
    result = firstNumber / secondNumber
} else if(operation === '+') {
    result = firstNumber + secondNumber
} else if(operation === '-') {
    result = firstNumber - secondNumber
} else {
    alert('wrong operation')
}


alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
