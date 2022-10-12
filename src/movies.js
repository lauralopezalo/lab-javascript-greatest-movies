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
    for (let i = 0; i < directorsList.length; i++) {
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
    if (moviesArray == 0)
        return 0;
    const allScores = moviesArray.map((movie) => {
        if (!movie.score)
            movie.score = 0;
        return movie.score;
    });
    const sumScore = allScores.reduce((previousValue, currentValue) => previousValue += currentValue);
    const averageScore = sumScore / allScores.length;
    return Math.round(averageScore * 100) / 100;
    // return (parseFloat((sumScore/allScores.length).toFixed(2)))
}
//console.log(scoresAverage(moviesArray))



// Iteration 4: Drama movies - Get the average of Drama Movies----------------------------------------------------------------------------------------------------------------------------------------
function dramaMoviesScore(moviesArray) {
    if (moviesArray == 0)
        return 0;
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (dramaMovies.length == 0)
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

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {

//     const allDrama = moviesArray.filter(movie =>{

//         if(movie.genre.includes('Drama')) return movie.score;//filter
//         if(!movie.genre.includes('Drama')) return 0;

//     })

//     return (scoresAverage(allDrama))
// }


//console.log(dramaMoviesScore(moviesArray))




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)------------------------------------------------------------------------------------------------------------------------
function orderByYear(moviesArray) {
    const sortedArray = [...moviesArray];
    sortedArray.sort((a, b) => {
        if (a.year < b.year)
            return -1;
        if (a.year > b.year)
            return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
        else
            return 0;
    });
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
function turnHoursToMinutes2(moviesArray) {
    const arrDur = moviesArray.map((movie) => {
        return movie.duration;
    });

    for (let i = 0; i < arrDur.length; i++) {
        arrDur[i].replace("h", "");
        arrDur[i].replace("min", "");
        const duration = arrDur[i].split(" "); 
        let minutos = parseInt(duration[0]) * 60; 
        if (duration[1])
            minutos += parseInt(duration[1]);
        arrDur[i] = minutos;
    }

    const newArr = moviesArray.map((movie, i) => {
        return {
            ...movie,
            duration: arrDur[i],
        };
    });

    return newArr;
}


//console.log(turnHoursToMinutes(moviesArray)


// BONUS - Iteration 8: Best yearly score average - Best yearly score average-------------------------------------------------------------------------------------------------------------------------
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
    const arrYear = moviesArray.map((movie) => {
        return movie.year;
    });

    const arrYearclean = [];
    for (let i = 0; i < arrYear.length; i++) {
        const element = arrYear[i];
        if (!arrYearclean.includes(element)) arrYearclean.push(element);
    }
    let num = 0;
    let index = 0;
    for (let i = 0; i < arrYearclean.length; i++) {
        const element = arrYearclean[i];
        const filt = moviesArray.filter((movie) => {
            if (movie.year === element) return true;
        });

        if (num === scoresAverage(filt)) {
            if (arrYearclean[i] < arrYearclean[i - 1]) {
                num = scoresAverage(filt);
                index = i;
            } else {
                num = num;
                index = i - 1;
            }
        }
        if (num < scoresAverage(filt)) {
            num = scoresAverage(filt);
            index = i;
        }
    }

    return `The best year was ${arrYearclean[index]} with an average score of ${num}`;
}
