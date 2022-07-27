const moviesArray = require("./data");

// Iteration 1: All directors? - Get the array of all directors.-----------------------------------------------------------------------------------------------------------------------------------------
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
            // Diego's solution:----------------------------------------------------------------------------
            //  function getAllDirectors(moviesArray) {
            //      const rawList = moviesArray.map((movie) => movie.director);
            //      const cleanList = rawList.filter((director, index) => rawList.indexOf(director) === index);
            //      return cleanList;
            //  }


function getAllDirectors(moviesArray) {
    const directorsList = moviesArray.map((movies) => movies.director);
    let cleanList = [];
    if (directorsList == 0)
        return null;
    for(let i = 0; i < directorsList.length; i++)
    {
        if (!cleanList.includes(directorsList[i]))
        cleanList.push(directorsList[i]);
    }
    return cleanList;
}
//console.log(getAllDirectors(moviesArray))




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?------------------------------------------------------------------------------------------------------
function howManyMovies(moviesArray) {
    const steven = moviesArray.filter((movie) => movie.director === "Steven Spielberg");
    const stevenDrama = steven.filter((movie) => movie.genre.includes("Drama"));
    return stevenDrama.length;
 }
// console.log(howManyMovies(moviesArray))




// Iteration 3: All scores average - Get the average of all scores with 2 decimals--------------------------------------------------------------------------------------------------------------------
function scoresAverage(moviesArray) {
    if(moviesArray == 0)
        return 0;
    const allScores = moviesArray.map((movie) => {
        if (!movie.score)
            movie.score = 0;
        return movie.score;
    });
    const sumScore = allScores.reduce((previousValue, currentValue) => previousValue += currentValue);
    const averageScore = sumScore / allScores.length;
    return Math.round(averageScore * 100) / 100;
}
//console.log(scoresAverage(moviesArray))



// Iteration 4: Drama movies - Get the average of Drama Movies----------------------------------------------------------------------------------------------------------------------------------------
function dramaMoviesScore(moviesArray) {
    if(moviesArray == 0)
        return 0;
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if(dramaMovies.length == 0)
        return 0;
    const allScores = dramaMovies.map((movie) => {
        if (!movie.score)
            movie.score = 0;
        return movie.score;
    }); 
    const sumScore = allScores.reduce((previousValue, currentValue) => previousValue += currentValue);
    const averageScore = sumScore / allScores.length;
    return Math.round(averageScore * 100) / 100;
}
//console.log(dramaMoviesScore(moviesArray))




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)------------------------------------------------------------------------------------------------------------------------
function orderByYear(moviesArray) {
    const sortedArray = [...moviesArray];
    sortedArray.sort((a, b) => {
        if(a.year < b.year)
            return -1;
        if(a.year > b.year)
            return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
        else
            return 0;
    });
    console.log(sortedArray[0])
    return sortedArray;
}
//console.log(orderByYear(moviesArray))




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles-----------------------------------------------------------------------------------------------------------------------
function orderAlphabetically(moviesArray) {
    const titleArray = moviesArray.map((movies) => movies.title);
    titleArray.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
        else
            return 0
    });
    return titleArray.slice(0, 20);
}
//console.log(orderAlphabetically(moviesArray))



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes---------------------------------------------------------------------------------------------------------------
function turnHoursToMinutes(moviesArray) {
    const minutesArray = [...moviesArray];
   // const newArray = [];
    minutesArray.forEach(movie => {
        movie.duration = movie.duration.replace('min', ''); 
        movie.duration = movie.duration.replace('h', '');
        movie.duration = movie.duration.split(' ');
        if (movie.duration.length == 1)
            movie.duration = parseInt(movie.duration) * 60;
        else
            movie.duration = movie.duration.reduce((a, b) => parseInt(a) * 60 + parseInt(b));
        console.log(movie.duration);
      //  newArray.push(movie);
        console.log(typeof minutesArray[0].duration);
    });
    return minutesArray;
    //return newArray;

}

turnHoursToMinutes(moviesArray)


// BONUS - Iteration 8: Best yearly score average - Best yearly score average-------------------------------------------------------------------------------------------------------------------------
function bestYearAvg(moviesArray) {}
