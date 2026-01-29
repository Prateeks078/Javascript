// Prototype is nothing but an object 

// Let us say we have Array (Base Class), It has some properties and methods associated with it.
// So when we create an array, it inherits all the properties and methods of Array class through prototype.

let arr=[1,2,3,4,5];

// So Basically [Array.prototype=arr.__proto__] This is what happens in the background

console.log(arr.__proto__); // This will give all the properties and methods of Array class
console.log(Array.prototype); // This will also give all the properties and methods of Array class

