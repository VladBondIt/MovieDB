'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const form = document.querySelector('.add'),
    input = document.querySelector('.adding__input'),
    movieList = document.querySelector('.promo__interactive-list'),
    btnForm = form.querySelector('button'),
    ads = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    titleAds = document.querySelector('.promo__adv-title');
let triggerCarts = document.querySelectorAll('.delete'),
    movieLists = document.querySelectorAll('.promo__interactive-item');

titleAds.remove();
ads.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';
promoBg.style.background = `url('../img/bg.jpg') center / 100% 100% no-repeat`;

// CREATE CART !!!





// Form add movie

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let addMovie = input.value;
    if (addMovie != '...' && addMovie != ' ' && addMovie != '' && addMovie.length <= 21) {
        movieDB.movies.push(addMovie);
        setTimeout(() => {
            input.value = '';
        }, 200);
    } else {
        input.value = '...';
        setTimeout(() => {
            input.value = '';
        }, 1400);
    }
});


// delete film





function chacked() {
    let checkbox = document.querySelector('.add__yes input')
    checkbox.addEventListener('click', () => {
        if (checkbox.hasAttribute('checked') == false) {
            checkbox.setAttribute('checked', 'checked');
            console.log("Добавляем любимый фильм");
        } else {
            checkbox.removeAttribute('checked');
        }
    });

}


chacked();






