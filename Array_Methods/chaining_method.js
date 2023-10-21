const numbers = [10,40,30,70,80,90,85];

//const filterNumbers = numbers.filter(num=>num > 75);
const result = numbers
                    .reverse()
                    .filter(num=>num > 75)
                    .map(num=> num + 5);
console.log(result);