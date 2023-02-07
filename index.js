'use strict'

const numberOfFilms = 10;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    print: false,
}

const lastMovie = prompt('One of the last films?'),
      scoreMovie = prompt('How much would you rate?', 0);

personalMovieDB.movies[lastMovie] = scoreMovie

console.log(personalMovieDB);  