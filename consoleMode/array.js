const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const emptyarr = [];

function showFamily(arr) {
    let str;

    if (arr.length !== 0){
        str = 'Семья состоит из:';

        for (let key of arr){
            str += ` ${key}`;
        }

        return str;
    } else return 'Семья пуста';
}

// console.log(showFamily(emptyarr))

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let key of arr){
        console.log(key.toLowerCase())
    }
}

// standardizeStrings(favoriteCities);


/*=========================Exercise 2==========================*/

const someString = 'This is some strange string';
function reverse(str) {
    if(typeof(str) === 'string'){
        let newStr = str.split('')
    newStr = newStr.reverse().join();
    for (let i = 0; i<newStr.length; i++){
        newStr = newStr.replace(',', '')
    }
    return newStr;
    } else return  "Ошибка!";
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = ''
    if (arr.length === 0) return 'Нет доступных валют';
    else{
        arr.forEach(function(curr,i){
            if (curr !== missingCurr){
                str += `${curr} \n`
            }
        })
        return str;
    }
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'))