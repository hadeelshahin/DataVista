// Sets => const mySet= new Set();
/*
  1- sets don't support array methods
  2- Duplicates in sets are not allowed
  3- index access are not allowed   mySet[0] => undefined
  4- sets methods: add, clear,delete,values,has,size,forEach
  5- it is important to store unique values like ids
  6- it stores values of any type : primitive Values, object ref
  7- automatically discarding duplicate values when added
  8- with arrays using spread operator to spread array elements in the set or direct add using this way
    const mySet= new Set(arr) this works without spread operator
  9-
*/
const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add({ price: 0.19 });
console.log(mySet);
mySet.forEach((item) => console.log(item));
//console.log(mySet.delete(1));
mySet.forEach((item) => console.log(item));
console.log(mySet.size);
console.log(mySet.clear());
mySet.forEach((item) => console.log(item));

const arr = [1, , 1, 1, 1, , 1, 1];
mySet.add(...arr);
mySet.add(arr);
mySet.forEach((item) => console.log(item));
console.log(mySet.size);
const myset = new Set(arr);
console.log(myset);

//Finding Common Elements in Multiple Sets:

const string1 = "hello";
const string2 = "hello world";

const set1 = new Set(string1.split(""));
const set2 = new Set(string2.split(""));

const intersectionSet = new Set([...set1].filter((item) => set2.has(item)));

console.log(intersectionSet);

//find common elemnts in mutiple sets

const set3 = new Set([1, 2, 3, 4]);
const set4 = new Set([1, 2, 3]);

const newSet = new Set([...set3].filter((item) => set4.has(item)));
console.log(newSet);

//add unique used ids;

const uniqueUserIds = new Set();

function add(id) {
  if (!uniqueUserIds.has(id)) {
    uniqueUserIds.add(id);
  }
}

add(1001);
add(1001);
add(2002);

uniqueUserIds.forEach((item) => console.log(item));
//symmitrec differnce:
const setA = new Set([1, 2, 3, 4, 5, 8, 9]);
const setB = new Set([1, 2, 3, 4, 5, 6, 7]);

const symSet = new Set([
  ...[...setA].filter((item) => !setB.has(item)),
  ...[...setB].filter((item) => !setA.has(item))
]);
console.log(symSet);
//Removing Duplicates from Arrays of Objects:
const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Alice" }
  ];
  
  const uniqueById = Array.from(
    new Set(data.map(obj => obj.id))
  ).map(id => data.find(item => item.id === id));
  
  console.log("Unique by ID:", uniqueById);



//****************************************************************** */
const words = ['listen', 'silent', 'hello', 'hi', 'hit', 'its'];

const groupAnagrams = (arr) => {
    const anagramGroups = new Map();
  
    arr.forEach((word) => {
      const sortedWord = word.split('').sort().join('');
      if (anagramGroups.has(sortedWord)) {
        anagramGroups.get(sortedWord).push(word);
      } else {
        anagramGroups.set(sortedWord, [word]);
      }
    });
  
    return Array.from(anagramGroups.values()).filter((group) => group.length > 1);
  };
  
  console.log("Anagram Groups:", groupAnagrams(words));
  // Output: [["listen", "silent"], ["hi", "hi"]]
    