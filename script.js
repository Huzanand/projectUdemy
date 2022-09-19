const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
        }else{
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + `${i+1}`, '')
            if (personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === '') i--;
        }
        personalMovieDB.genres.forEach(function(genre, i){
            console.log(`Любимый жанр #${i+1} - это ${genre}`)
        })
    },
    showDB: function(){
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else{
            console.log("Отказ в доступе!")
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat === false) personalMovieDB.privat = true;
        else personalMovieDB.privat = false;
    }
}

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel()
personalMovieDB.writeYourGenres();
// personalMovieDB.showDB();

// console.log(personalMovieDB);





