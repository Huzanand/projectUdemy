"use strict"

function getTimeFromMinutes(value){
    if(isNaN(value) || !Number.isInteger(value) || value < 0){
        return  "Ошибка, проверьте данные";
    } else {
        const hours = Math.floor(value / 60);
        const minutes = value - (hours * 60);
        
        if(hours === 1) return `Это ${hours} час и ${minutes} минут`;
        if(hours > 4 || hours === 0) return `Это ${hours} часов и ${minutes} минут`;
        if(1 < hours < 5) return `Это ${hours} часa и ${minutes} минут`;
    }
}

function findMaxNumber(a, b, c, d){
    if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number' || a == null || b == null || c == null|| d == null){
        return 0;
    } else{
        let aCount = 0, bCount = 0, cCount = 0, dCount = 0;
        console.log('gg')
        if(a > b) aCount++;
        if(a > c) aCount++;
        if(a > d) aCount++;
        
        if(b > a) bCount++;
        if(b > c) bCount++;
        if(b > d) bCount++;

        if(c > a) cCount++;
        if(c > b) cCount++;
        if(c > d) cCount++;

        if(d > a) dCount++;
        if(d > b) dCount++;
        if(d > c) dCount++;


        if(aCount > bCount && aCount > cCount && aCount > dCount) return a;
        if(bCount > aCount && bCount > cCount && bCount > dCount) return b;
        if(cCount > aCount && cCount > bCount && cCount > dCount) return c;
        if(dCount > aCount && dCount > bCount && dCount > cCount) return d;
    }
}

// console.log(findMaxNumber(1, 5, '6', 11))


function fib(a) {
    let str = '0';
    let s1 = 0;
    let s2 = 1;
    let temp = 0;
    if(isNaN(a) || !Number.isInteger(a) || a <= 0){
        return '';
    } else{
        for (let i = 0; i < a - 1; i++){
            if( i === 0) str += ' ' + (s1 + s2);
            else{
                str += ' ' + (s1 + s2);
            
                temp = s1;
                s1 = s2;
                s2 += temp;
            }
        }
        return str;
    }
}


console.log(fib(7));






