//Adding and Removing elements to an Array:
console.log("************************************");
const hobbies = ["sports", "cooking"];
console.log(hobbies);

//ways of Adding data to this Array:
//****************************************************************************************************** */
//1-using push()

hobbies.push("newHobby", "new");
console.log(hobbies); //push adds new elements at the end of the array

//****************************************************************************************************** */
//2- using unshift()

hobbies.unshift("unshiftHobby");
console.log(hobbies); //it adds elements at the begging of an array

const fruits = ["banana", "orange"];
console.log(fruits); // Output: ['banana', 'orange']

fruits.unshift("apple");
console.log(fruits); // Output: ['apple', 'banana', 'orange']

fruits.unshift("grapes", "kiwi");
console.log(fruits); // Output: ['grapes', 'kiwi', 'apple', 'banana', 'orange']

//****************************************************************************************************** */
//3- using pop()
// it removes last element of an array
console.log(fruits); //(5) ['grapes', 'kiwi', 'apple', 'banana', 'orange']
const removedFruit = fruits.pop();
console.log(fruits); //length:(4) ['grapes', 'kiwi', 'apple', 'banana']
console.log(removedFruit); //orange   using pop we can store the poped value // pop return the poped value

//****************************************************************************************************** */
//4- using shift()
//shift() removes elements at the begging of an array

const shiftedIteam = fruits.shift();
console.log(fruits);

//****************************************************************************************************** */
//5- using the index access

//****************************************************************************************************** */
//6- splice()  =>helps us to insert/remove iteams between the array elements "overright"
//=>  takes at leaset 2
//splice(startIndex , deleteCount , iteams )

const colors = ["red", "green", "blue", "yellow"];

// Removing 1 element from index 1 and adding 'purple' in its place
const removedElements = colors.splice(1, 0, "purple");

console.log(removedElements); // Output: ['green']
console.log(colors); // Output: ['red', 'purple', 'blue', 'yellow']
//this was splice for inserting

//Splice for deleting just 2 arguments  Splice(startIndex,deleteCount)
console.log(colors);
colors.splice(0, 2);
console.log(colors);
colors.splice(-1, 1); // it deales with negative index
console.log(colors);

//Splice wihhout deleteCount will delete all iteams
const allRemovedIteams = colors.splice(0);
console.log(colors);
console.log(allRemovedIteams);

const n = colors.push("red");
console.log(n); //push ,unshift return a number , new length of an array
console.log(colors);

//****************************************************************************************************** */
//7- slice() => silce(startIndex(optional-included), endIndex(optiona-exculsive))
// a nice way of copying an array

const test = [1, 2, 3, 4];
// console.log(test);
// const cobiedTest = test;
// console.log(cobiedTest);
// cobiedTest.splice(0, 0, "both of the arrays affected");

const sliceArray = test.slice();
sliceArray.push("new sliced iteam");
console.log(test); // length=4
console.log(sliceArray); // length=5 => slice does'nt modify the original array

//if i used negativ indeces sp both have to be negative
const wrongnegativeSelecting = test.slice(-1, 2);
console.log(wrongnegativeSelecting); //[] length=0
const negativeSelecting = test.slice(-3, -1); // [2, 3]  -1 index value not included
console.log(negativeSelecting);
//****************************************************************************************************** */
//8- concat()  =>

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = ["g", "h"];

const mergedArray = array1.concat(array2, array3);
console.log(mergedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const splicedArray = ["hello", "splicedArray"];
mergedArray.splice(2, 0, ...splicedArray);
console.log(mergedArray);
//****************************************************************************************************** */
//9-indexOf()  and lastIndexOf()
/* 1- return index
   2- indexOf(searchIteam , startIndex(optional))
   3- return -1 if the element not found
   4- works only with arrays that conatins primitive valies like numbers, strings, booleans , so it can't work with objects
   5- return index of the first apperance iteam
   */

//    const numbers = [1, 2, 3, 4, 5];
//    const index = numbers.indexOf(3);
//    console.log(index); // Output: 2 (index of value 3 in the array)

const scores = [10, 20, 30, 40, 50];

const indexThirty = scores.indexOf(30);
console.log(indexThirty); // Output: 2 (index of the value 30 in the array)

const indexSixty = scores.indexOf(60);
const lastIndexOf = scores.lastIndexOf(30);
console.log(indexSixty, lastIndexOf); // Output: -1 (since 60 is not found in the array)

const array = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const obj = { id: 2, name: "Bob" };

const index = array.indexOf(obj);
console.log(index); // Output: -1 (because obj's reference doesn't match any object reference in the array)

//****************************************************************************************************** */
//10- find() and findIndex()
/* find() => array.find(callbackFunction(item,index,array)=>{return condition})
    1- it return the first matched object
    2-it return only one item
    3-it doesn't create a copy 

   findIndex( it takes a callbak function )
     1- it return an index of the first matched item 


*/
const personData = [
  { name: "manual" },
  { name: "max", age: 25 },
  { name: "max" },
];
const found = personData.find((element, index) => {
  return element.name === "max" && index === 1;
});
console.log(found);

const books = [
  { id: 1, title: "JavaScript: The Good Parts" },
  { id: 2, title: "Eloquent JavaScript" },
  { id: 3, title: "Clean Code" },
];
const bookToFind = books.find((element, index, array) => {
  return element.title === "Clean Code";
});
console.log(bookToFind);

const products = [
  { id: 1, name: "Product A", price: 25 },
  { id: 2, name: "Product B", price: 40 },
  { id: 3, name: "Product C", price: 30 },
];
const toFind = products.find((item, index, array) => {
  return item.price >= 30;
});
console.log(toFind);
const f = products.find((item, index, array) => {
  return item.price <= 35;
});
console.log(f);

const maxPrice = 35;
const minPrice = 30;
const toBeFound = products.find((item, index, array) => {
  return item.price <= maxPrice && item.price >= minPrice;
});
console.log(toBeFound);

const matchedIndex = products.findIndex((item, index, array) => {
  return item.id === 2;
});
console.log(matchedIndex);

//****************************************************************************************************** */
// 11- include()

/*  it works on primitive array content
 it returns boolean values {true,false}
*/
const inludeArray = [1, 2, 3, 4];
console.log(inludeArray.includes(1)); //true
console.log(inludeArray.includes(10)); //false
//****************************************************************************************************** */
//12- forEach((item,index,array)=>{})   => it takes a function as an argument

const numbersArr = [1, 2, 3, 4, 5];

numbersArr.forEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.17;
const newPrices = [];
prices.forEach((item, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: item * (1 + tax) };
  newPrices.push(priceObj);
});
console.log(newPrices);

//****************************************************************************************************** */
//13- map()  => same as forEach but it creates new array without affecting the exsiting one

const mapArray = newPrices.map((item) => {
  return { newMapPrice: item.taxAdjPrice * 2 };
});
console.log(newPrices, mapArray);
//****************************************************************************************************** */
//14- sort() =>

const a = [4, 2, 5, 1, 3];
console.log(a);
a.sort((a, b) => {
  return a - b; // Ascending order
});

console.log(a); // Output: [1, 2, 3, 4, 5]
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => {
  return b - a; // Descending order
});

console.log(points); // Output: [100, 40, 25, 10, 5, 1]
//******************************************************************************************************
//15 - filter()  =>

/* it solves the find() hence find only return the first matched value 
 filter returns all the matching values 
  filter(callBack function(item,index,array)=>{return based on a condition})
  */

const arr = [5, 7, 3, 4, 9, 6, 10, 12, 3];

const filterdArray = arr.filter((item) => {
  return item >= 5;
});

console.log(arr, filterdArray); // it creates new array
/* ********************************************************************************************* */
//reduce() => this method is used to reduce an array to a single value
// reduce(callBackFunction(accumulator,currentValue,index,array) , initialValue)

const arr1 = [1, 2, 3, 4, 5, 6];
const sum = arr1.reduce((accumulator, currentValue, index, arra) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce(
  (accumulator, currentValue, index, array) => {
    return accumulator.concat(currentValue);
  },
  ["initialItem"]
);
console.log(flattenedArray);

/* ********************************************************************************************* */
//split() and join()
/* split(sperator,limit(optional)) =>  to split a string "it is a string method" into an array
  
     join(seperatot(optional)) => it joins an array into a single string
   */

const string = "2000;newYouk;almond"; //string
const splittedString = string.split(";");
console.log(splittedString); //['2000', 'newYouk', 'almond']
const text = "JavaScript is a programming language";

const parts = text.split(" ", 3); // Split by space with a limit of 3

console.log(parts);
// Output: ['JavaScript', 'is', 'a']
const fruits = ["Apple", "Orange", "Banana"];

const fruitString = fruits.join(", "); // Join with a comma and space

console.log(fruitString);
// Output: 'Apple, Orange, Banana'
const arr2 = ["hadeel", "shahin"];
console.log(arr2.join(" "));


  // spread operator
//Array Destrucring : unpack values from an array

const arr = [1, 2, 3, 4];
const [first, second, third, ...restInformation] = arr;
console.log(first, second, third, restInformation);
