// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (movie) {
        return movie.director;
    } );
    return directors;
} */

function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*function howManyMovies(moviesArray) {
  const filtered = moviesArray.filter((movie) => {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });
  return filtered.length;
} */

function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray || moviesArray.length == 0) return 0;
  const filtered = moviesArray.filter((movie) => movie.score);
  const scores = filtered.reduce((acc, movie) => acc + movie.score, 0);

  /*  const scores = moviesArray.reduce((acc, movie) => {
    return movie.score ? acc + movie.score : acc;
  }, 0); */
  let avg = scores / filtered.length;
  avg = Math.round(avg * 100) / 100;
  return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray || moviesArray.length == 0) return 0;
  const drama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  if (drama.length === 0) return 0;
  const score = drama.reduce((acc, movie) => acc + movie.score, 0);
  let avg = score / drama.length;
  avg = Math.round(avg * 100) / 100;
  return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesString = JSON.stringify(moviesArray);
  const movieCopy = JSON.parse(moviesString);
  console.log(moviesString, movieCopy);

  movieCopy.sort(function (movieA, movieB) {
    if (movieA.year === movieB.year)
      return movieA.title > movieB.title ? 1 : -1;
    else return movieA.year - movieB.year;
  });
  return movieCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesString = JSON.stringify(moviesArray);
  const movieCopy = JSON.parse(moviesString);

  movieCopy.sort(function (movieA, movieB) {
    /*if (movieA.title > movieB.title) return 0;
    else return -1; */
    return movieA.title > movieB.title ? 0 : -1;
  });
  const titleMovies = movieCopy.map((el) => el.title);
  return titleMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

/*
1h 20min
dividir en 2 parts
multiplicar 1hora x 60
sumar eso a los minutos


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {} */
