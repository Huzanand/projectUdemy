"use strict"

function calculateVolumeAndArea(value){
    if(isNaN(value) || !Number.isInteger(value) || value <= 0){
        console.log("При вычислении произошла ошибка");
    } else{
        const cubeVolume = value * value * value;
        const cubeArea = 6 * (value * value);
        return `Объем куба: ${cubeVolume}, площадь всей поверхности:  ${cubeArea}`;
        }
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(value){
    if(isNaN(value) || !Number.isInteger(value)){
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if(value <= 0 || value > 36){
        return console.log("Таких мест в вагоне не существует");
    } else{
        const coupe = Math.ceil(value/4);
        return coupe;
    }
}

