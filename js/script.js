'use strict';


// document.addEventListener('DOMContentLoaded', () => {
//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     const form = document.querySelector('.add'),
//         input = document.querySelector('.adding__input'),
//         movieList = document.querySelector('.promo__interactive-list'),
//         ads = document.querySelectorAll('.promo__adv img'),
//         promoGenre = document.querySelector('.promo__genre'),
//         checkbox = document.querySelector('.add__yes input'),
//         promoBg = document.querySelector('.promo__bg');


//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove();
//         });
//     };

//     const makeChanges = () => {
//         promoGenre.textContent = 'Драма';
//         promoBg.style.background = `url('../img/bg.jpg') center / 100% 120% no-repeat`;
//     };

//     const sortArr = (arr) => {
//         arr.sort();
//     };


//     // Form add movie

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let addMovie = input.value.toUpperCase();
//         const fav = checkbox.checked;
//         if (addMovie != '...' && addMovie != ' ' && addMovie != '') {
//             if (addMovie.length > 21) {
//                 addMovie = `${addMovie.substring(0, 22)}...`;
//             }

//             if (fav) {
//                 console.log('Добавляем любимый фильм');
//             }

//             movieDB.movies.push(addMovie);

//             sortArr(movieDB.movies);

//             createMovieList(movieDB.movies, movieList);

//             setTimeout(() => {
//                 input.value = '';
//             }, 200);
//         } else {
//             input.value = '...';
//             setTimeout(() => {
//                 input.value = '';
//             }, 1400);
//         }

//     });

//     // function chacked() {
//     //     let checkbox = document.querySelector('.add__yes input');
//     //     checkbox.addEventListener('click', () => {
//     //         if (checkbox.hasAttribute('checked') == false) {
//     //             checkbox.setAttribute('checked', 'checked');
//     //             console.log("Добавляем любимый фильм");
//     //         } else {
//     //             checkbox.removeAttribute('checked');
//     //         }
//     //     });

//     // }

//     function createMovieList(films, parent) {
//         parent.innerHTML = '';

//         sortArr(films);

//         films.forEach((film, i) => {
//             parent.innerHTML += `
//             <li class="promo__interactive-item">№${i + 1} ${film}
//             <div class="delete"></div>
//             </li>
//         `;
//         });

//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentNode.remove();
//                 movieDB.movies.splice(i, 1);
//                 createMovieList(films, parent);
//             });
//         });
//     }
//     // chacked();

//     deleteAdv(ads);

//     createMovieList(movieDB.movies, movieList);

//     makeChanges();
// });



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

function deleteMovie() {
    movieList.addEventListener('click', (e) => {
        e.target.remove();
        movieSort(movieLists);
    })

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


