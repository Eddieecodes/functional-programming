//functional programming

//first class function on wikidepia is said to be first class when it treats functions as first class citizens
//a first class citizen is an entity which supports all the operations generally available to other entity. so what this means is the ability for the function to be treated as any other data type or variable.

//function as variable
//function as an arguements
//returning function

//example
//first class function as a variable
function square(x) {
  return x * x;
}
const solve = square;
// console.log(square);
// console.log(solve(6));

//moving on to the next example which
// is also a high order function because it accepts other functions as parameters or returns it as outputs.
//from the code base the my_map function accepts a func function and an arraylist as paraments and then later assigned a variable calcs where the my_map accepts the initial function cal and the array numbers
//first class function as an agrument
//cal function
function handleSquareANumber(y) {
  return y * y;
}

//my_map accepts fun and arrayList as arguements
function handleSquareEachItemInAnArray(fun, arrayList) {
  let result = [];
  for (let i = 1; i <= arrayList.length; i++) {
    result.push(fun(i));
  }
  return result;
}

const calcs = handleSquareEachItemInAnArray(
  handleSquareANumber,
  [1, 2, 3, 4, 5]
);
// console.log(calcs);

//functions return
function logger(msg) {
  function send_msg() {
    // console.log(`say: ${msg}`);
  }
  return send_msg;
}
const sent_msg = logger("hey");
// console.log(sent_msg("hey"));

//pure function
//this is a function that has no side effects as gives the same output as the input
const array = [1, 2, 3];
function addElementToArray(a, element) {
  return [...a, element];
}
console.log(addElementToArray(array, 4)); //output array with 4 added to array
console.log(array); //output array =1,2,3

//immutability concept
//are those whose state cannot be modified after they are created. Instead of modifying existing data, functional programming encourages the creation of new data structures with updated values.
// created an array
const originalArray = [1, 2, 3, 4, 5];

// created a pure function
function doubleArray(arr) {
  // Return a new array with each element doubled
  return arr.map((num) => num * 2);
}

// Call the doubleArray function with the originalArray
const doubledArrayResult = doubleArray(originalArray);

// Output the original and doubled arrays
// console.log(originalArray); // Output: [1, 2, 3, 4, 5]
// console.log(doubledArrayy); // Output: [2, 4, 6, 8, 10]
