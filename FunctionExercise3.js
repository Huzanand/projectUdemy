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
    if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)){
        console.log("all is good")
    } else{
        console.log('0')
    }
}

console.log(findMaxNumber(1, 2, 2.5, 'f'))
