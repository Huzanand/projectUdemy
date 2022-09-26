function factorial(num) {
    if (isNaN(num) || !Number.isInteger(num)){
        return "Wrong type of number!";
    } else if (num <= 0) {
        return 1;
    } else {
        num *= factorial(num-1);
        return num;
    }
}

console.log(factorial(5))