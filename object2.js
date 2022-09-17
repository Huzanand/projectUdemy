const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let temp = 1;
    shoppingMallData.shops.forEach((elem, i) => {
        let {width} = data.shops[i];
        let {length} = data.shops[i];
        temp = width * length;
        square += temp;
    })
    let volume = square * shoppingMallData.height;
    let costForHeating = volume * shoppingMallData.moneyPer1m3;
    console.log(costForHeating);
    if (costForHeating <= shoppingMallData.budget) return 'Бюджета достаточно'
    else return 'Бюджета недостаточно'
}

console.log(isBudgetEnough(shoppingMallData));

