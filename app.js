//Different ways if creating Arrays:
//1-most common way: sqaure brackets notation
const numbers = [1, 2, 3];
console.log(numbers);

for (num of numbers) {
  console.log(num);
}
/********************************************************************* */
// 2- using special "new" keyword and the Array() constructor function

const moreNumbers = new Array([1, 2], "hi"); // it creates a new array object based on how do we use the constructor
console.log(moreNumbers);

const more = new Array(1); // array with fixed length
console.log(more); // empty array with length of 1

const newArray = new Array(3); // Creates an array with a length of 3

console.log(newArray); // Output: [empty x 3]

// Accessing elements
newArray[0] = "Apple";
newArray[1] = "Banana";
newArray[2] = "Orange";

console.log(newArray); // Output: ['Apple', 'Banana', 'Orange'
/********************************************************************* */
//3- omitting the new keyword and use only the Array() constructor function:
const noNew = Array(10);
console.log(noNew);
noNew[0] = "noNew";
/********************************************************************* */
//4- Array.of()
//special 'of' method of the array object

const ofArray = Array.of(2);
console.log(ofArray);
/********************************************************************* */
//5- Array.from()
//it does not take multiple numbers
// const fromArray = Array.from(2);
// console.log(fromArray);

// it takes an Iterable or Array-Like object"NodeList"
const fromArray = Array.from("Hello");
console.log(fromArray); // length:(5) ['H', 'e', 'l', 'l', 'o']  =>usefull for splitting strings
//also usefull with a NodeList ex:
const listIteams = document.querySelectorAll("li");
console.log(listIteams);  //NodeList(3) [li, li, li]

const newList = Array.from(listIteams);
console.log(newList); //length:(3) [li, li, li]
