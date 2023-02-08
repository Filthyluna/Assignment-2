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
  return false;
};

//Test
const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('car'));
//Should be false
const pets2 = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
//Should be true

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, index) {
  // Place your code here.
  //Added index to specify more than one piece of information in a string
  //Helps handle the part where index of returns a substring index greater than or equal to a specified number
  if(index){
  for(let i = index; i < this.length; i++){
    if(searchElement === this[i]){
      return i
    }
  }
}
else{
  for(let i = 0; i < this.length; i++){
    if(searchElement === this[i]){
      return i
    }
  }
}
 return -1 // Returns this if it is not found
};

//Test
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst)
console.log(paragraph.indexOf(searchTerm, indexOfFirst + 1));

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  if(index){
  for(let i = index; i > 0; i--){
    if(searchElement === this[i]){
      return i
    }
  }
}
else{
  for(let i = this.length; i > 0; i--){
    if(searchElement === this[i]){
      return i
    }
  }
}
 return -1 // Returns this if it is not found
};

//Test
const paragraph2 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm2 = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  let key_arr = [] //Holds array of keys
  for(let i in object){ //cycles through the object we create
    key_arr.push(i) //Pushes only the keys into the new array
  }
  return key_arr //Return new array
};

//Test
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.myKeys(object1));

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  let obj_arr = [] //Holds array of objects
  for(let i in object){ //cycles through the object we create
    obj_arr.push(object[i]) //Pushes only the objects into the new array
  }
  return obj_arr //Return new filled array
};

console.log(Object.myValues(object1));