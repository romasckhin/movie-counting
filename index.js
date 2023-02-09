'use strict'

const numberOfFilms = prompt(' How many movies do you watched? ')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    print: false,
}


for ( let i = 0; i < 1; i++ ) {

    const lastMovie = prompt('One of the last films?'),
          scoreMovie = prompt('How much would you rate?', 0);

    if ( lastMovie !== null 
        && scoreMovie !== null 
        && lastMovie !== '' 
        && scoreMovie !== '' 
        && lastMovie.length < 50 ) {

        personalMovieDB.movies[lastMovie] = scoreMovie
    } else {
        i--
    }
}

if ( personalMovieDB.count < 10 ) {
    console.log('few movies');
} else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    console.log('cool audience');
} else if ( personalMovieDB.count >= 30  ) {
    console.log('fan');
} else {
    console.log('error');
}

console.log(personalMovieDB);  