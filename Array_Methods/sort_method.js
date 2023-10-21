// const numbers = [10,50,30,40,20];
// numbers.sort();
// console.log(numbers);

// const names = ["Yash", "Shubham", "Aniket", "Harsh", "Sankalp"];
// names.sort();
// console.log(names);

// const numbers = [5,10,7,3,6];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);

// const numbers = [5,10,7,3,6];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// console.log(numbers);

// const movies = [
//     {name: "Bahubali2",ratings:10},
//     {name: "Jawan",ratings:7},
//     {name: "Magdheera",ratings:9},
//     {name: "Dhamal",ratings:8},
// ]
// movies.sort((a,b)=>{
//     return a.ratings - b.ratings;
// });
// console.log(movies);

const movies = [
    {name: "Bahubali2",ratings:10},
    {name: "Jawan",ratings:7},
    {name: "Magdheera",ratings:9},
    {name: "Dhamal",ratings:8},
]
movies.sort((a,b)=>b.ratings - a.ratings);
console.log(movies);


