// const numbers = [10,20,30,40,50];

// const reduceNumbers = numbers.reduce((total, current )=>{
//     total = total + current;
//     return total;
// },0);
// console.log(reduceNumbers);

// const numbers = [7,2,3,5,9];

// const reduceNumbers = numbers.reduce((total,current)=>{
//     return total = total*current;
// } ,1);
// console.log(reduceNumbers);

const students = [
    {name:"Shubham" , marks: 9},
    {name:"Alex" , marks: 4},
    {name:"Dev" , marks: 6},
    {name:"Shubham" , marks: 2},
    {name:"Alex" , marks: 8},
    {name:"Dev" , marks: 6},
    {name:"Shubham" , marks: 5},
    {name:"Alex" , marks: 3},
    {name:"Dev" , marks: 9},
];

const reduceStudents = students.reduce((total, current)=>{
    if(current.name === "Shubham"){
        total = total + current.marks;
    }
    return total;
}, 0);
console.log(reduceStudents);