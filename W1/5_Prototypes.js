// Prototype is nothing but an object 

// Let us say we have Array (Base Class), It has some properties and methods associated with it.
// So when we create an array, it inherits all the properties and methods of Array class through prototype.

let arr = [1, 2, 3, 4, 5];

// So Basically [Array.prototype=arr.__proto__] This is what happens in the background

console.log(arr.__proto__); // This will give all the properties and methods of Array class
console.log(Array.prototype); // This will also give all the properties and methods of Array class



Object.prototype.chai = function () {
    console.log("Prateek is great");
}

arr.chai(); // This will work because arr inherits from Object.prototype through prototype chain

// ---------------------------------------------------- Polyfills ----------------------------------------------------

// Polyfills are the methods which are not present in the current environment but we can create them manually
// Creating a polyfill for foreach let us say okay as it is not present in the current environment

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userfunc) {

        const originalarr = this;
        for (let i = 0; i < originalarr.length; i++) {
            result = userfunc(originalarr[i], i);
        }
    }
}


const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// foreach 
// signature: No return typeof, input is a callback function which takes 3 parameters (currentValue, index, array)

const res = myarr.forEach(function (value, index) {
    console.log(`The value at index ${index} is ${value}`);
})


// ----------------------------------------------------- Using Polyfill ----------------------------------------------------


// Polyfill for Map 

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userfunc) {
        const result = []

        for (let i = 0; i < this.length; i++) {
            const res = userfunc(this[i], i);
            result.push(res);
        }
        return result; //Important to Read and Notice bro 
    }
}

// Map signature: Returns a new array, input is a callback function which takes 3 parameters (currentValue, index))

const narr = [1, 2, 3, 4, 5];
// const x=narr.map((e)=>e*4); -- smjhne ke liye we took
// console.log(x); 

const y = narr.myMap(function (value, index) {
    return value * 4;
})

const x = narr.myMap((e) => e * 4);
console.log(y);


// ------------------------------------------------------ Using Polyfill ----------------------------------------------------

// Filter Polyfill 
// signature: Returns a new array, input is a user function 
// Agar user function returns true, element is kept else not                

const filterarr = [10, 15, 20, 25, 30, 35, 40];


if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userfunc) {
        const res=[];
        for(let i=0;i<this.length;i++){
            if(userfunc(this[i])){
                res.push(this[i]);
            }
        }
        return res;
    }
}

// const z=filterarr.filter((e)=>e%2==0);
// console.log(z); // [ 10, 20, 30, 40 ]

const z=filterarr.myFilter((e)=>e%2==0);
console.log(z);

// ------------------------------------------------------ Using Polyfill (Homework) ----------------------------------------------------



