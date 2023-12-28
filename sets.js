const mySet = new Set([1, 2, 3]);

for (const value of mySet.values()) {
  console.log(value); //[1,1] [2,2] [3,3] ==> Set doesn't have a key-value pair structure like Map
}

// const iterableObject = [10, 20, 30];
// const iterator = iterableObject[Symbol.iterator]();

// console.log(iterator.next()); // Output: { value: 10, done: false }
// console.log(iterator.next()); // Output: { value: 20, done: false }
// console.log(iterator.next()); // Output: { value: 30, done: false }
// console.log(iterator.next());

/**************************************************************************** */
//maps: =>collection of keys,values pairs where each key can be of any datatype

const obj1 = { name: "marah" };
const obj2 = { name: "maram" };

const myMap = new Map([[obj1, [{ date: "yesterday", price: 10 }]]]);

console.log(myMap);
console.log(myMap.get(obj1));