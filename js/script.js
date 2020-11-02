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

let movieLists = document.querySelectorAll('.promo__interactive-item');

titleAds.remove();
ads.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';
promoBg.style.background = `url('../img/bg.jpg') center / 100% 100% no-repeat`;

// CREATE CART !!!



function movieSort(lists) {
    lists = document.querySelectorAll('.promo__interactive-item');
    movieDB.movies.sort();
    lists.forEach((list, j) => {
        movieDB.movies.forEach((item, i) => {
            if (i == j) {
                list.innerHTML = `№ ${j + 1} ${item}`;
            }
        });
        let cart = document.createElement('div');
        cart.classList.add('delete');
        list.append(cart);

    });
}

movieSort(movieLists);

// Form add

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let addMovie = input.value;
    if (addMovie != '...' && addMovie != ' ' && addMovie != '' && addMovie.length <= 21) {
        let addNewMovie = document.createElement('li');
        addNewMovie.innerHTML = addMovie;
        addNewMovie.classList.add('promo__interactive-item');
        movieDB.movies.push(addMovie);
        movieList.append(addNewMovie);
        movieSort(movieLists);
        triggerCarts = document.querySelectorAll('.delete');
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

let triggerCarts = document.querySelectorAll('.delete');
console.log(triggerCarts);
function deleteMovie() {

    triggerCarts.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            item.parentNode.remove();
            item.remove();
            movieDB.movies.forEach((movieInDb, j) => {
                if (i == j) {
                    movieDB.movies.splice(i, 1);
                }
            });

            console.log(movieDB.movies);
            triggerCarts = document.querySelectorAll('.promo__interactive-item div');
            movieLists = document.querySelectorAll('.promo__interactive-item');
            movieSort(movieLists);
            console.log(movieLists);
            triggerCarts = document.querySelectorAll('.promo__interactive-item div');
            console.log(triggerCarts);
        });

    });

}

deleteMovie();


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






