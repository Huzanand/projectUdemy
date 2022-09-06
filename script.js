const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


start: for(let i = 0; i < numberOfFilms; i++){
    let a = prompt('Один из последних фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if(a == null || a == '' || a.length > 50 || b == null || b == '' || b.length > 50){
        console.log('Error!')
        i--;
        continue start;
    }

    personalMovieDB.movies[a] = b;
}

// for(let i = 0; i < 2; i++){
//     let a = prompt('Один из последних фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
    
//     if(a == null || a == '' || a.length > 50 || b == null || b == '' || b.length > 50){
//         console.log('Error!');
//         i--;
//     } else{
//         console.log('Done');
//         personalMovieDB.movies[a] = b;
//     }
// };


if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30){
    console.log('Вы киноман');
}else{
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);





