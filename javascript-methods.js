/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let new_arr = [];
  for (let i = 0; i < this.length; i++){
    new_arr.push(callbackFn(this[i])); //Push the value from modified array into the empty array
  }
  return new_arr
};

//Test
const arr = [1, 2, 3, 4];
const map1 = arr.myMap(x => x + 2); //created
console.log(map1);

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  let new_arr = []
  for (let i = 0; i < this.length; i++){
    if (callbackFn(this[i])) { //If it is true that this i value is fron cbfn...
      new_arr.push(this[i]) //Push the item into the new arraysom
    }
    else {
      continue
    }
  }
  return new_arr
};

//Test 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length === 5);
console.log(result);

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  let bool = false
  for (let i = 0; i < this.length; i++){
    if (callbackFn(this[i])) {
      bool = true
    }
    else {
      continue
    }
  }
  return bool;
};

//Test 
const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.mySome(even));
// Checks if odd
const odd = (element) => element % 2 === 1;
console.log(array.mySome(odd));

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  let bool = true
  for (let i = 0; i < this.length; i++){
    if (!callbackFn(this[i])){
      bool = false
    }
  }
  return bool;
};

// Test
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.myEvery(isBelowThreshold));

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let num = 0;
  for (let i = 0; i < this.length; i++){
    callbackFn(num = num + this[i])
  }
  return num;
};

//Test
const array2 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    let array_el = this[i]
    if (searchElement === array_el)
      return true;
  }
  return false
};

//Test
const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('car'));
//Should be false
const pets2 = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
//Should be true

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};