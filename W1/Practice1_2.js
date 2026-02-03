// let a;
// let b = null;

// console.log(typeof a);
// console.log(typeof b);

// Output is: undefined and NULL 

// -------------------------------------------------------------------------

// let arr=["Green", "pink", "white"];
// Change "Green" to "Yellow".
// Add "Black" at the end (don’t use index).
// Print the length.
// Remove the first element.

// Solution 

// console.log(arr);

// arr[0]="Yellow";
// console.log(arr);

// arr.push("black");
// console.log(arr.length);

// delete(arr[0]);
// console.log(arr);

// --------------------------------------------------------------------------

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020
// };

// Print the model.
// Change year to 2024.
// Add new key: color: "White".
// Print the whole object.

// Solution 

// console.log(car);
// car.year=2025;

// console.log(car);

// car.color="White";
// console.log(car)

// ----------------------------------------------------------------------------

let fruits = ["Apple", "Mango", "Banana"];
// Using a for loop, print:

// Fruit at index 0 is Apple
// Fruit at index 1 is Mango
// Fruit at index 2 is Banana


// Solution:

for(let i=0;i<fruits.length;i++){
    console.log(`Fruit at index ${i} is ${fruits[i]}`);
}


// ------------------------------------------------------------------------------ 

let arr = ["A", "B"];
arr[4] = "Z";
console.log(arr);
console.log(arr.length);

// Solution is 
// Because JS arrays behaves as Objects not fixed sized arrays, that is why the holes are being created bro..... 

