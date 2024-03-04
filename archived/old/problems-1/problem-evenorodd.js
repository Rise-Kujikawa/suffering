function evenOrOdd(num1, num2) {
    const num1Even = num1 % 2 === 0;
    const num2Even = num2 % 2 === 0;
    return (num1Even && !num2Even) || (!num1Even && num2Even);
}
console.log (evenOrOdd(1, 2));