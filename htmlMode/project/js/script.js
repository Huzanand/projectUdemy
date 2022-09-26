'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          promoIntItem = document.querySelectorAll('.promo__interactive-item');
    
    adv.forEach(item => {
        item.remove();
    })
    
    genre.textContent = 'Драма';
    
    poster.style.backgroundImage = "url('img/bg.jpg')";
    
    const sortArray = () =>{
        movieDB.movies.sort();
    }
    
    const watchFilmLst = function (){
        movieList.innerHTML = "";
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        })
    }
    sortArray();
    watchFilmLst();
    
    const inputs = document.querySelectorAll('form.add input'),
          btnConfirm = document.querySelector('form.add button');
    const trashBox = document.querySelectorAll('.delete');
    
    btnConfirm.addEventListener('click', (event) =>{
        event.preventDefault()
        let newFilm = inputs[0].value;
        if(newFilm){
            if (newFilm.length > 21){
                newFilm = `${newFilm.slice(-0, 21)}...`
            }
            movieDB.movies.push(newFilm);
            if (inputs[1].checked){
                console.log('Adding like film')
            }
            sortArray();
            watchFilmLst();
        }
    })
    
    trashBox.forEach( (item, i) =>{
        item.addEventListener('click', (event) =>{
            event.preventDefault();
            
            trashBox.paretElement.remove();
            movieDB.movies.splice(i, 1)

            watchFilmLst();
            console.log('working')
    
            sortArray();
            watchFilmLst();
        })
    })
    console.log(movieDB.movies[0])
})

