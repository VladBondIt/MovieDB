/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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


const ads = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    movieLists = document.querySelectorAll('.promo__interactive-item'),
    titleAds = document.querySelector('.promo__adv-title');

titleAds.remove();
ads.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Драма';
promoBg.style.background = `url('../img/bg.jpg') center / 100% 100% no-repeat`;

movieDB.movies.sort();

movieLists.forEach((list, j) => {
    movieDB.movies.forEach((item, i) => {
        if (i == j) {
            list.textContent = `№ ${i + 1} ${item}`;
        }
    });
});
