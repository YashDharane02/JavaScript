 // const ratings = [5,10,9,7,2,3,8];

 // const filteredRatings =ratings.filter(rate =>  rate >6);
 // //console.log("Hi")
 // console.log(filteredRatings);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const even = numbers.filter((num) =>{
//     let result = num % 2 ==0;
//     return result;
// });

// console.log(even);

// const odd = numbers.filter((num) =>{
//     let result = num % 2 ==0;
//     return !result;
// });
// console.log(odd);

const movies = [
    {name: "Coffee Day" , ratings: 9},
    {name: "The Lost Coder" , ratings: 7},
    {name: "Typical Bug" , ratings: 4}
];
const filteredMovies = movies.filter((movie) =>{
    return movie.ratings > 6;
})
console.log(filteredMovies);