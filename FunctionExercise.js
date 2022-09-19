function sayHello(name){
    return 'Hello ' + name + '!'
}


function returnNeighboringNumbers(num){
    const arr = [];  
    +num;
    arr[0] = num-1;
    arr[1] = num;
    arr[2] = num+1;
    return arr;
}

function getMutchResult(num, times){
    if(typeof(times) !== 'number' || times <= 0){
        return num;
    }

    let str = '';

    for(let i = 1; i <= times; i++){
        if(i === times){
            str += `${num * i}`
        } else{
            str += `${num * i}---`;
        }
    }

    return str;
}



let a = getMutchResult(3, 10);

console.log(a);


// Место для первой задачи:
function getTimeFromMinutes(a) {
    if (!Number.isInteger(a) || a < 0 || typeof a !== 'number') {
        return 'Ошибка, проверьте данные';
    } else if (Math.floor(a / 60) === 1) {
        return `Это ${Math.floor(a / 60)} час и ${a % 60} минут`;
    } else if (Math.floor(a / 60) === 0 || Math.floor(a / 60) === 10) {
        return `Это ${Math.floor(a / 60)} часов и ${a % 60} минут`;
    } else {
        return `Это ${Math.floor(a / 60)} часа и ${a % 60} минут`;
    }
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' && typeof b !== 'number' && typeof c !== 'number' && typeof d !== 'number') {
        return 0;
    } else if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > b && c > c && c > d) {
        return c;
    } else if (d > b && d > c && d > a) {
        return d;
    } else {
        return 0;
    }
}