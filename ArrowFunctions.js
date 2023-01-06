// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//ES5 Map Callback
//use arrow functions to write the above function

const double = (arr) => {arr.map((val) => {val * 2})};

// re-factor the following function to use arrow functions

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

const squareAndFindEvens = (numbers) => {
    numbers.map(val => val ** 2).filter(square => square % 2 === 0)
}