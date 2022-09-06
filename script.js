let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let a = prompt('Один из последних фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
        if(a == null || a == '' || a.length > 50 || b == null || b == '' || b.length > 50){
            console.log('Error!');
            i--;
        } else{
            console.log('Done');
            personalMovieDB.movies[a] = b;
        }
    };
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + `${i+1}`, '')
    }
}

function showDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } else{
        console.log("Отказ в доступе!")
    }
}

start();
rememberMyFilms();
writeYourGenres();
showDB();

// console.log(personalMovieDB);





