'use strict'

let numberOfFilms;

function start () {
    numberOfFilms = +prompt(' How many movies do you watched?', '')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(' How many movies do you watched? ', '')
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    print: false,
}

function rememberMyFilms () {
    for ( let i = 0; i < 1; i++ ) {

        const lastMovie = prompt('One of the last films?').trim(),
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
}

rememberMyFilms()

function detectedPersonalLevel () {
    
    if ( personalMovieDB.count < 10 ) {
        console.log('few movies');
    } else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
        console.log('cool audience');
    } else if ( personalMovieDB.count >= 30  ) {
        console.log('fan');
    } else {
        console.log('error');
    }

}



function writeYourGenres (favoriteGenre) {

    for ( let i = 0; i < 3; i++ ) {

        favoriteGenre.push(prompt(` Your favorite genre? ${i + 1} `))
    }

}

writeYourGenres(personalMovieDB.genres)