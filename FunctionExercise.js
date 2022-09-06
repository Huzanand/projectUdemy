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