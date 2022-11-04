const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const str = arr.filter( item => item.rating > 7);
    return newArr;
}

function showListOfFilms(arr) {
    return arr.reduce( (string, item) => `${typeof(string) === 'object' ? string.name : string}, ${item.name}`);
}

function setFilmsIds(arr) {
    return arr.map( (item, i = 0) => {
        item.id = i;
        return item;
    })
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every( item => item.id || item.id === 0);
}






const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
    .reduce((sum, item) => sum += item.amount, 0);  
};


const getTotalIncomeAmount = (data) => {
    if(data.some(item => item.amount < 0)) return data.reduce((sum, item) => sum += item.amount, 0);
    else return getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds))